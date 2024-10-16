import React, { useEffect, useState } from 'react';
import styles from './Tela_cadastro.module.css';

const Cadastro = () => {
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

  // Cadastrar novo usuário via POST
  const cadastrar = async (infoUsuarios) => {
    try {
      const resposta = await fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoUsuarios)
      });

      if (!resposta.ok) {
        console.log('Erro ao cadastrar usuário');
      } else {
        alert('Usuário cadastrado com sucesso');
      }

    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { ...formData, id: Date.now() };
    cadastrar(newUser); // Cadastrar no backend

    // Resetar formulário
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
          <h2>Cadastre-se</h2>
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
                Cadastre-se
              </button>
            </form>
          </div>
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
