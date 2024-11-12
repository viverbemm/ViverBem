import styles from './navConfig.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




function navConfig() {

    return(
        <div className={styles.navPrin}>
            <header>
                <div className={styles.navBarDire}>
                    <a href="#"><b>ViverBem+</b></a>

                </div>
                <div className={styles.navBarEsq}>
                    <a href="/PaginaInicial">Pagina Inicial</a>
                    <a href="/MinhaConta">Minha Conta</a>
                </div>
            </header>

        </div>
    )

}
export default navConfig;

