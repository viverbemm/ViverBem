import React from 'react';
import './css/login_gestao.css';

function Login() {
    return (
        <div className="container">
            <header className="header">
                <span className="welcome-text">Bem-vindo, Vamos Começar a Gestão</span>
                <span className="logo-text">ViverBem+</span>
            </header>

            <div className="login-box">
                <h2>Faça Login aqui!</h2>
                <form action="#">
                    <label htmlFor="matricula">Matrícula</label>
                    <input type="text" id="matricula" name="matricula" required />

                    <label htmlFor="senha">Senha*</label>
                    <input type="password" id="senha" name="senha" required />

                    <a href="#" className="forgot-password">Esqueci a senha</a>

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
