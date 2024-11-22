import styles from './NavBar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




function navBar() {

    return(
        <div className={styles.navPrin}>
            <header>
                <div className={styles.navBarDire}>
                    <a href="/">ViverBem+</a>

                </div>
                <div className={styles.navBarEsq}>
                    <a href="/">Pagina Inicial</a>
                    <a href="/Tela_profissionais">Catálogo</a>
                    <a href="/LoginUsuario">Login</a>
                </div>
            </header>

        </div>
    )

}
export default navBar;

