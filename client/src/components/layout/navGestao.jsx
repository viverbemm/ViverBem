import styles from './navGestao.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function navGestao(){

    return(
    <div className={styles.navBar}>

        <header>
            <div className={styles.navbarRight}>
                <a href="/Gestao"><b>ViverBem+ | Gestão </b></a>
            </div>

            <div className={styles.navbarLeft}>
                <a href="/Financeiro"><b>Financeiro</b></a>
                <a href="/Controle"><b>Controle de Usuários</b></a>
                <a href="/CadastrarAdmin"><b>Cadastrar Admin</b></a>
                <a href="/EditarAdmin"><b>Editar Admin</b></a>
            </div>

        </header>


    </div>
    );

}

export default navGestao;
