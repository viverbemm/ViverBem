import React, { useState } from 'react';
import styles from './Config.module.css';
import { useNavigate } from 'react-router-dom';


const Configuracoes = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const menuShow = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <main className={styles.config}>
           
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
