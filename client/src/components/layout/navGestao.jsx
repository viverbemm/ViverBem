import styles from './navGestao.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navGestao(){

    return(
    <div className={styles.navBarr}>

        <header>
            <div className={styles.navbarRight}>
                <a href="/bem_vindo">ViverBem+ | Gestão </a>
            </div>

            <div className={styles.navbarLeft}>
                <a href="/Financeiro">Financeiro</a>
                <a href="/Controle">Controle de Usuários</a>
            </div>

        </header>


    </div>
    );

}

export default navGestao;
