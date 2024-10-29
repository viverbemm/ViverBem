import React, { useState } from 'react';
import styles from './Config.module.css';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';

const Configuracoes = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const menuShow = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (

   <div>
      <NavBar/>
        <main className={styles.config}>
           
         

            <div className={styles.config_container}>
                <h2>Configurações</h2>
                <div className={styles.config_item}>
                    <i className= "fa-solid fa-circle-user"></i>
                    <a className={styles.cada} href="/tela_profissionais">Minha Conta</a>
                </div>
               
                <div className={styles.config_item}>
                    <i className="fas fa-dollar-sign"></i>
                    <a className={styles.cada} href="/Login">Pagamentos</a>
                    
                </div>
                </div>
                <NavInferior/>
           
        </main>
        </div>
    );
};

export default Configuracoes;
