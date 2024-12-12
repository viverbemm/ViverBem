import logo from '../pages/imagens/logox.png';
import styles from './navConfig.module.css';
import React from 'react';


function navConfig() {

    return(
        <div className={styles.navPrinc}>
            <header>
                <div className={styles.navBarDirei}>
                    <a href="/"><img src={logo} alt="" style={{height: '80px', with: '80px', marginLeft: '120px' }} /></a>

                </div>
                <div className={styles.navBarEsqu}>
                    <a href="/perfil">Minha Conta</a>
                    <a href="/Config">Configurações</a>
                    <a href="/PaginaInicial">Sair</a>
                </div>
            </header>

        </div>
    )

}
export default navConfig;

