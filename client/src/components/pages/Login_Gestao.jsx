import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para navegação
import styles from './Login_Gestao.module.css';



const Login = () => {
  const navigate = useNavigate(); // Inicializando o hook para navegação

  const handleButtonClick = () => {
    // Aqui você pode adicionar validação de login, se necessário
    navigate('/Gestao'); // Redireciona para a página desejada
  };

  return (
    <div className={styles.login_page}>
      <header className={styles.header}>
        <span className={styles.header_left}>Bem-vindo, Vamos Começar a Gestão</span>
        <span className={styles.header_right}>ViverBem+</span>
      </header>
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <h2>Faça Login aqui!</h2>
          <form>
            <div className={styles.input_group}>
              <label>Matrícula*</label>
              <input type="text" placeholder="Digite sua matrícula" />
            </div>
            <div className={styles.input_group}>
              <label>Senha*</label>
              <input type="password" placeholder="Digite sua senha" />
            </div>
            <div className={styles.forgot_password}>
              <a href="#">Esqueci a senha</a>
            </div>
            {/* Substituir o onSubmit pelo onClick */}
            <button type="button" onClick={handleButtonClick}>ENTRAR</button> 
          </form>
          <div className={styles.logo_container}>
            <img src="logo.png" alt="ViverBem+" className={styles.logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
