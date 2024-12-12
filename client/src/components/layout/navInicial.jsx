import styles from './navInicial.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pages/imagens/logox.png';




function NavInicial() {

    return (
        <div className={styles.navInicial}>
            <header>
                <div className={styles.navInicialDire}>
                    <a href="/"><img src={logo} alt="" style={{ height: '80px', with: '80px', marginLeft: '120px' }}>/</img></a>

                </div>
                <div className={styles.navInicialEsq}>
                    <a href="/">Pagina Inicial</a>
                    <a href="/LoginUsuario">Login</a>
                </div>
            </header>

        </div>
    )

}
export default NavInicial;

