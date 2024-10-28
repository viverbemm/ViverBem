import React from 'react';
import styles from './LoginUsuario.module.css';
import NavBar from '../layout/navBar';


function Login_Usuario() {
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


               
            </main>

        </div>
    );
}

export default Login_Usuario;

