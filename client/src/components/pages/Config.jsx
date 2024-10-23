import React, { useState } from 'react';
import styles from './Config.module.css';
import { useNavigate } from 'react-router-dom';
import Menu_superior from './Menu_superior.jsx';

const Configuracoes = () => {
    // State to manage the mobile menu's visibility
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu's visibility
    const menuShow = () => {
        setMenuOpen(prevState => !prevState); // Toggle the state
    };

    return (
        <main>
           
            <div className={styles.config_container}>
                <h2>Configurações</h2>
                <div className={styles.config_item}>
                    <i className="fas fa-wallet"></i>
                    <a className={styles.cada} href="#">Minha Conta</a>
                </div>
               
                <div className={styles.config_item}>
                    <i className="fas fa-dollar-sign"></i>
                    <a className={styles.cada} href="#">Pagamentos</a>
                </div>
            </div>

            <div className={styles.endereco}>
                <p>Viverbem+</p>
                <p>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
            </div>
        </main>
    );
};

export default Configuracoes;
