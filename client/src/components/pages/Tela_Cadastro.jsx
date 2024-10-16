import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tela_cadastro.module.css';

const Cadastro = () => {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    matricula: '',
    data_nascimento: '',
    senha: '',
    confirmar_senha: '',
    cidade: '',
    tipo_usuario: ''
  });

  useEffect(() => {
    const fetchedUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(fetchedUsuarios);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const cadastrar = async (infoUsuarios) => {
    try {
      const resposta = await fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoUsuarios)
      });

      if (!resposta.ok) {
        alert('Erro ao cadastrar usuário');
      } else {
        alert('Usuário cadastrado com sucesso');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
    }
  };

  const editar = async (infoUsuarios) => {
    try {
      const resposta = await fetch(`http://localhost:3001/usuarios/${infoUsuarios.id}`, {
        method: 'PUT',  // Corrigir para PUT
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoUsuarios)
      });
  
      if (!resposta.ok) {
        alert('Erro ao editar usuário');
      } else {
        alert('Usuário editado com sucesso');
        // Atualizar a lista de usuários no estado local
        const updatedUsuarios = usuarios.map(usuario =>
          usuario.id === infoUsuarios.id ? infoUsuarios : usuario
        );
        setUsuarios(updatedUsuarios);
        localStorage.setItem('usuarios', JSON.stringify(updatedUsuarios));
      }
    } catch (error) {
      console.error('Erro ao editar usuário', error);
    }
  };
  

  const excluir = async (id) => {
    try {
      const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
        method: 'DELETE',  // Método correto para deletar
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!resposta.ok) {
        alert('Erro ao excluir usuário');
      } else {
        alert('Usuário excluído com sucesso');
        // Atualizar a lista de usuários no estado local
        const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(updatedUsuarios);
        localStorage.setItem('usuarios', JSON.stringify(updatedUsuarios));
      }
    } catch (error) {
      console.error('Erro ao excluir usuário', error);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUsuarios = [...usuarios];

    if (formData.id) {
      const index = updatedUsuarios.findIndex(u => u.id === formData.id);
      updatedUsuarios[index] = formData;
      editar(formData); // Chamar o PUT com os dados do formulário para editar
    } else {
      const newUser = { ...formData, id: Date.now() };
      updatedUsuarios.push(newUser);
      cadastrar(formData); // Chamar o POST com os dados do formulário para cadastrar
    }

    setUsuarios(updatedUsuarios);
    localStorage.setItem('usuarios', JSON.stringify(updatedUsuarios));

    setFormData({
      id: null,
      nome: '',
      telefone: '',
      email: '',
      cpf: '',
      matricula: '',
      data_nascimento: '',
      senha: '',
      confirmar_senha: '',
      cidade: '',
      tipo_usuario: ''
    });
  };

  const handleEdit = (usuario) => {
    setFormData(usuario); // Preencher os campos com os dados do usuário selecionado para edição
  };

  const handleDelete = (id) => {
    excluir(id); // Chamar a função para excluir o usuário
  };

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>ViverBem+</h1>
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a href="/Bem_vindo" className="nav-link">Página inicial</a>
              </li>
              <li className="nav-item">
                <a href="/Login" className="nav-link">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="login-section">
          <h2>{formData.id ? 'Editar Usuário' : 'Cadastre-se'}</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input type="text" name="nome" placeholder="Nome Completo *" value={formData.nome} onChange={handleChange} required />
              <input type="tel" name="telefone" placeholder="Telefone *" value={formData.telefone} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
              <input type="text" name="cpf" placeholder="CPF *" value={formData.cpf} onChange={handleChange} required />
              <input type="text" name="matricula" placeholder="Matrícula (profissionais)" value={formData.matricula} onChange={handleChange} />
              <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} required />
              <input type="password" name="senha" placeholder="Crie uma senha *" value={formData.senha} onChange={handleChange} required />
              <input type="password" name="confirmar_senha" placeholder="Confirme sua senha *" value={formData.confirmar_senha} onChange={handleChange} required />

              <select name="cidade" value={formData.cidade} onChange={handleChange} required>
                <option value="">Selecione sua cidade:</option>
                <option value="cariacica">Cariacica</option>
                <option value="fundao">Fundão</option>
                <option value="guarapari">Guarapari</option>
                <option value="serra">Serra</option>
                <option value="viana">Viana</option>
                <option value="vila velha">Vila Velha</option>
                <option value="vitoria">Vitória</option>
              </select>

              <select name="tipo_usuario" value={formData.tipo_usuario} onChange={handleChange} required>
                <option value="">Selecione uma opção:</option>
                <option value="cliente">Cliente</option>
                <option value="profissional">Profissional</option>
              </select>

              <button type="submit" className="register-link">
                {formData.id ? 'Salvar' : 'Cadastre-se'}
              </button>
            </form>
          </div>
        </section>

        <section className="user-list">
          <h2>Usuários Cadastrados</h2>
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.id}>
                {usuario.nome} - {usuario.email}
                <button onClick={() => handleEdit(usuario)}>Editar</button>
                <button onClick={() => handleDelete(usuario.id)}>Excluir</button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="endereco">
        <p>
          ViverBem+<br />
          Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES
        </p>
      </footer>
    </div>
  );
};

export default Cadastro;
