import styles from './navInicial.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




function NavInicial() {

    return(
        <div className={styles.navInicial}>
            <header>
                <div className={styles.navInicialDire}>
                    <a href="#">ViverBem+</a>

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

