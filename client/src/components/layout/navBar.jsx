import styles from './NavBar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




function navBar() {

    return(
        <div className={styles.navPrin}>
            <header>
                <div className={styles.navBarDire}>
                    <a href="#"><b>ViverBem+</b></a>

                </div>
                <div className={styles.navBarEsq}>
                    <a href="/PaginaInicial">Pagina Inicial</a>
                    <a href="/LoginUsuario">Login</a>
                </div>
            </header>

        </div>
    )

}
export default navBar;

