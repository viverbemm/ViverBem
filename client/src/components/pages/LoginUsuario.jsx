import React from 'react';
import styles from './LoginUsuario.module.css';
import NavBar from '../layout/navBar';


function LoginUsuario() {
    return (

        <div>

            <NavBar />

            <main>

                <section className={styles.login_section}>

                    <div className={styles.form_container}>
                        <form>
                            <h2>Login</h2>
                            <input type="text" name="cpf" placeholder="CPF:" required />
                            <input type="password" name="senha" placeholder="Digite sua senha:" required />
                            <a href="/Cadastro" className={styles.register_link}>Cadastre-se</a>
                        </form>
                    </div>
                </section>


                <footer className={styles.endereco}>
                    <p>ViverBem+<br />Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
                </footer>
            </main>

        </div>
    );
}

export default LoginUsuario;

