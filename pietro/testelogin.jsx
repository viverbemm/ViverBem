import React from 'react';
import './css/tela_de_cadastro.css';
import './css/testelogin.css';
import './css/menu_superior.css';

function App() {
    return (
        <React.Fragment>
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
                            {<img className="icon" src="assets/img/menu_white_36dp.svg" alt="" />}
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

            <div className="logo-viver">
                {<img src="img/LOGO_VIVER_BEM_+_2-removebg-preview (1).png" alt="Logo ViverBem+" className="logo-form" />}
            </div>

            <main>
                <section className="login-section">
                    <img src="img/login.jpg" alt="Idoso e profissional" className="main-image" />
                    <div className="form-container">
                        <form>
                            <h2>Login</h2>
                            <input type="text" name="cpf" placeholder="CPF:" required />
                            <input type="password" name="senha" placeholder="Digite sua senha:" required />
                            <a href="#" className="register-link">Cadastre-se</a>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="endereco">
                <p>ViverBem+<br />Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
            </footer>
        </React.Fragment>
    );
}

export default App;

function menuShow() {
    // Função para mostrar/esconder o menu em dispositivos móveis.
    console.log('Função menuShow chamada!');
}
