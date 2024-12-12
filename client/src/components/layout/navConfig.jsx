import logo from '../pages/imagens/logox.png';
import styles from './navConfig.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function NavConfig() {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        setTimeout(() => {
            navigate('/'); 
        }, 2000);
    };

    return (
        <div className={styles.navPrinc}>
            <header>
                <div className={styles.navBarDirei}>
                    <a href="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '80px', width: '200px', marginLeft: '120px' }}
                        />
                    </a>
                </div>
                <div className={styles.navBarEsqu}>
                    <a href="/perfil">Minha Conta</a>
                    <a href="/Config">Configurações</a>
                    <a href="#" onClick={handleLogout}>Sair</a>
                </div>
            </header>
        </div>
    );
}

export default NavConfig;
