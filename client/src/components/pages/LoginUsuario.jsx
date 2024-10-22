import React from 'react';
import styles from './LoginUsuario.module.css';



function App() {
    return (
        <React.Fragment>
            <header>
                <nav className={styles.nav_bar}>
                    <div className={styles.logo}>
                        <h1>ViverBem+</h1>
                    </div>

                    <div className={styles.nav_list}>
                        <ul>
                            <li className={styles.nav_item}>
                                <a href="#" className={styles.nav_link}>Página inicial</a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#" className={styles.nav_link}>Login</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mobile_menu_icon}>
                        <button onClick={menuShow}>
                            {<img className="icon" src="assets/img/menu_white_36dp.svg" alt="" />}
                        </button>
                    </div>
                </nav>

                <div className={styles.mobile_menu}>
                    <ul>
                        <li className={styles.nav_item}>
                            <a href="#" className={styles.nav_link}>Página inicial</a>
                        </li>
                        <li className={styles.nav_item}>
                            <a href="#" className={styles.nav_link}>Login</a>
                        </li>
                    </ul>
                </div>
            </header>

            <div className={styles.logo_viver}>
                {<img src="img/LOGO_VIVER_BEM_+_2-removebg-preview (1).png" alt="Logo ViverBem+" className="logo-form" />}
            </div>

            <main>
                <section className={styles.login_section}>
                    <img src="img/login.jpg" alt="Idoso e profissional" className="main-image" />
                    <div className={styles.form_container}>
                        <form>
                            <h2>Login</h2>
                            <input type="text" name="cpf" placeholder="CPF:" required />
                            <input type="password" name="senha" placeholder="Digite sua senha:" required />
                            <a href="#" className={styles.register_link}>Cadastre-se</a>
                        </form>
                    </div>
                </section>
            </main>

            <footer className={styles.endereco}>
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
