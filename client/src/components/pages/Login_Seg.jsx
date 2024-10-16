import React from 'react';
import styles from './Login_seg.module.css';

function LoginSeguranca() {
  const menuShow = () => {
    // Função JavaScript para exibir/ocultar o menu mobile.
  };

  const toggleEdit = (campo) => {
    // Função JavaScript para alternar entre editar ou não um campo.
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>ViverBem+</h1>
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Página inicial</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Login</a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <img className="icon" src="assets/img/menu_white_36dp.svg" alt="Menu" />
            </button>
          </div>
        </nav>

        <div className="mobile-menu">
          <ul>
            <li className="nav-item">
              <a href="#" className="nav-link">Página inicial</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="main-container">
        <div className="section-header">
          <i className="fas fa-lock"></i>
          <h2>Login e segurança</h2>
        </div>

        <div className="login-section">
          <h3>Login</h3>
          <div className="login-details">
            <p>Senha</p>
            <div className="login-actions">
              <a href="#" className="edit-btn" onClick={() => toggleEdit('telefone')}>
                Atualizar
              </a>
            </div>
          </div>
          <p className="last-updated">Última atualização há 8 meses</p>
        </div>

        <hr />

        <div className="account-section">
          <h3>Conta</h3>
          <div className="account-actions">
            <p>Desativar conta</p>
            <a href="#" className="editar-btn" onClick={() => toggleEdit('nome')}>
              Desativar
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="logo-footer">
            <img
              src="img/LOGO_VIVER_BEM_+_2-removebg-preview (1).png"
              alt="Logo ViverBem+"
            />
            <p></p>
          </div>
        </div>
        <address>
          Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES
        </address>
      </footer>
    </>
  );
}

export default LoginSeguranca;
