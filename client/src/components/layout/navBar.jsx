import styles from './NavBar.module.css';
import logo from '../pages/imagens/logox.png';
import React from 'react';


function navBar() {

    return (
        <div className={styles.navPrin}>
            <header>
                <div className={styles.navBarDire}>
                    <a href="/PaginaInicial"><img src={logo} alt="" style={{height: '80px', with: '80px', marginLeft: '120px' }} /></a>
                </div>
                <div className={styles.navBarEsq}>
                    <a href="/PaginaInicial">Página Inicial</a>
                    <a href="/Tela_profissionais">Catálogo</a>
                    <a href="/LoginUsuario">Login</a>
                </div>
            </header>

        </div>
    )

}
export default navBar;
