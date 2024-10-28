import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Login_Gestao.module.css';



const Login = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
  
    navigate('/Gestao'); 
  };

  return (
    <div className={styles.login_page}>
        <div className={styles.login_box}>
          <h2>ViveBem+</h2>
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
        
            <button type="button" onClick={handleButtonClick}>ENTRAR</button> 
          </form>
    
        </div>
      </div>
   
  );
};

export default Login;
