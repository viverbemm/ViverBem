import styles from './navConfig.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




function navConfig() {

    return(
        <div className={styles.navPrinc}>
            <header>
                <div className={styles.navBarDirei}>
                    <a href="#"><b>ViverBem+</b></a>

                </div>
                <div className={styles.navBarEsqu}>
                    <a href="/PaginaInicial">Pagina Inicial</a>
                    <a href="/MinhaConta">Minha Conta</a>
                </div>
            </header>

        </div>
    )

}
export default navConfig;

