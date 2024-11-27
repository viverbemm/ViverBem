import styles from './NavBar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pages/imagens/LOGO_VIVER_BEM_+_2-removebg-preview (1) - Copia.png';




function navBar() {

    return (
        <div className={styles.navPrin}>
            <header>
                <div className={styles.navBarDire}>
                    <img style={{ marginLeft: '20px', width: '300px', height: '270px' }} src={logo} alt="" />
                </div>
                <div className={styles.navBarEsq}>
                    <a style={{
                        border: '2px solid #ddd',
                        borderRadius: '30px',
                        marginRight: '20px'
                    }} href="/">Pagina Inicial</a>
                    <a style={{
                        border: '2px solid #ddd',
                        borderRadius: '30px',
                        marginRight: '20px'
                    }}href="/Tela_profissionais">Catálogo</a>
                    <a style={{
                        border: '2px solid #ddd',
                        borderRadius: '30px'
                    }} href="/LoginUsuario">Login</a>
                </div>
            </header>

        </div>
    )

}
export default navBar;

