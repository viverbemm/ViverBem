import React from 'react';
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                
                <span className={styles.logo_text}>ViverBem+</span>
            </header>

            <div className={styles.login_box}>
                <h2>Faça Login aqui!</h2>
                <form action="#">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" required />

                    <label htmlFor="senha">Senha*</label>
                    <input type="password" id="senha" name="senha" required />

                    <a href="#">Esqueci senha</a>
                    
                    <a href="/Cadastro">Cadastre-se</a>

                    <button type="submit" className="btn">ENTRAR</button>
                </form>
                <div className={styles.logo}>
                    <img src="img/logo.png" alt="Logo ViverBem+" />
                </div>
            </div>
        </div>
    );
}

export default Login;
