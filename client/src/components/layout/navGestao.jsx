import styles from './navGestao.module.css';
import logo from '../pages/imagens/logox.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navGestao() {

    return (
        <div className={styles.navBarr}>

            <header>
                <div className={styles.navbarRight}>
                    <a href="/bem_vindo"><img src={logo} alt="" style={{ height: '80px', with: '80px', marginLeft: '120px' }}>/</img></a>
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
