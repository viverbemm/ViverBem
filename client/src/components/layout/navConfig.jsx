import styles from './navConfig.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




function navConfig() {

    return(
        <div className={styles.navPrinc}>
            <header>
                <div className={styles.navBarDirei}>
                    <a href="/">ViverBem+</a>

                </div>
                <div className={styles.navBarEsqu}>
                    <a href="/perfil_profissional">Minha Conta</a>
                    <a href="/Config">Configurações</a>
                </div>
            </header>

        </div>
    )

}
export default navConfig;

