import React from 'react';
import styles from './Cadastro.module.css';




const Cadastro = () => {
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
                <a href="#" className="nav-link">
                  Página inicial
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-icon">
            
          </div>
        </nav>

        
      </header>

      <div className="logo-viver">
   <img src="velho-mulher.webp" alt="" />
      </div>

      <main>
        <section className="login-section">
          <img
            src="../components/imagens/velho-mulher.webp"
            alt="Idoso e profissional"
            className="main-image"
          />
          <div className="form-container">
            <form>
              <h2>Cadastre-se</h2>
              <input type="text" name="nome" placeholder="Nome Completo *" required />
              <input type="tel" name="telefone" placeholder="Telefone *" required />
              <input type="email" name="email" placeholder="Email *" required />
              <input type="text" name="cpf" placeholder="CPF *" required />
              <input type="text" name="matricula" placeholder="Matrícula (profissionais)" />
              <input type="date" name="data_nascimento" placeholder="Data de nascimento *" required />
              <input type="password" name="senha" placeholder="Crie uma senha *" required />
              <input type="password" name="confirmar_senha" placeholder="Confirme sua senha *" required />

              <select name="cidade" required>
                <option value="">Selecione sua cidade:</option>
                <option value="cariacica">Cariacica</option>
                <option value="fundao">Fundão</option>
                <option value="guarapari">Guarapari</option>
                <option value="serra">Serra</option>
                <option value="viana">Viana</option>
                <option value="vila velha">Vila Velha</option>
                <option value="vitoria">Vitória</option>
              </select>

              <select name="tipo_usuario" required>
                <option value="">Selecione uma opção:</option>
                <option value="cliente">Cliente</option>
                <option value="profissional">Profissional</option>
              </select>

              <a href="#" className="register-link">
                Cadastre-se
              </a>
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
