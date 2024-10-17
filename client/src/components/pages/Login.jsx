import React from 'react';
import styles from './Login.module.css';

function Login() {
    return (
        <div className="container">
            <header className="header">
                
                <span className="logo-text">ViverBem+</span>
            </header>

            <div className="login-box">
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
                <div className="logo">
                    <img src="img/logo.png" alt="Logo ViverBem+" />
                </div>
            </div>
        </div>
    );
}

export default Login;
