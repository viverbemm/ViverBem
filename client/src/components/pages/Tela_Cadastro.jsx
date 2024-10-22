<<<<<<< HEAD
import Navbar from '../layout/navBar';
import { useState } from 'react';
import FormAula from '../formAula/FormAula';
=======
import React, { useEffect, useState } from 'react';
import styles from './Tela_cadastro.module.css'; // Importando o CSS Module
>>>>>>> 5b1c42d8b75b8abb928b319e67d3ae8523d7a2d2


<<<<<<< HEAD
    async function cadastrarAula(infoAula) {
        try {
            const resposta = await fetch('http://localhost:3001/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(infoAula)
            });
=======
>>>>>>> 5b1c42d8b75b8abb928b319e67d3ae8523d7a2d2

const Cadastro = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsuarios = [...usuarios];

    if (formData.id) {
      const index = usuarios.findIndex(u => u.id === formData.id);
      updatedUsuarios[index] = formData;
    } else {
      const newUser = { ...formData, id: Date.now() }; // Gera um ID único
      updatedUsuarios.push(newUser);
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
    setFormData(usuario);
  };

  const handleDelete = (id) => {
    const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
    setUsuarios(updatedUsuarios);
    localStorage.setItem('usuarios', JSON.stringify(updatedUsuarios));
  };

  return (
    <div>
      <MenuSuperior /> {/* Adicionando o MenuSuperior aqui */}

      <main>
        <section className={styles['login-section']}>
          <div className={styles['form-container']}>
            <h2>{formData.id ? 'Editar Usuário' : 'Cadastre-se'}</h2>
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

              <button type="submit" className={styles['register-link']}>
                {formData.id ? 'Salvar' : 'Cadastre-se'}
              </button>
            </form>
          </div>
        </section>

        <section className={styles['user-list']}>
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

      <footer className={styles.endereco}>
        <p>
          ViverBem+<br />
          Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES
        </p>
      </footer>
    </div>
  );
};

export default Cadastro;
