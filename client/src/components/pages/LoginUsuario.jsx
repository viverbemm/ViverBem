import React from 'react';
import styles from './LoginUsuario.module.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';
import { useNavigate } from 'react-router-dom';


function LoginUsuario() {

    const navigate = useNavigate(); 

    const handleButtonClick = () => {
    
      navigate('/'); 
    };
    return (

        <div className={styles.pageee}>

            <NavBar />

            <main >

                <section className={styles.login_section}>

                    <div className={styles.form_container}>
                        <form>
                            <h2>Login</h2>
                            <input className={styles.cpf} type="text" name="cpf" placeholder="CPF:" required />
                            <input className={styles.senha} type="password" name="senha" placeholder="Digite sua senha:" required />
                            <a href="/Cadastro" className={styles.register_link}><b>Cadastre-se</b></a>
                           
                            <button className={styles.button} type="button" onClick={handleButtonClick}>Entrar</button> 
                       </form>
                       
                       
                    </div>
                </section>

               
            </main>
            <NavInferior/>
        </div>
        
    );
}

export default LoginUsuario;

