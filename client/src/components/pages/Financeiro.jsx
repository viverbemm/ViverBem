import React from 'react';
import styles from './Financeiro.module.css';


function Financeiro() {
    return (
        <div>
            <header>
                <div className={styles.navbar}>
                    <span><b>Olá Administrador</b></span>
                    <div className={styles.menu}>
                        <button className={styles.menu_btn}><b>MENU</b></button>
                        <ul className={styles.dropdown}>
                            <li><a href="#">Financeiro</a></li>
                            <li><a href="#">Configurações</a></li>
                            <li><a href="#">Relatórios e Estatísticas</a></li>
                            <li><a href="#">Controle de Usuários</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main>
                <h1>Financeiro</h1>
                <div className={styles.filters}>
                    <input type="date" defaultValue="2024-06-01" />
                    <input type="date" defaultValue="2024-06-30" />
                    <select>
                        <option>Consultar</option>
                    </select>
                    <button className={styles.search_btn}>
                        <i className="fas fa-search"></i> Pesquisar
                    </button>
                </div>

                <div className={styles.results}>
                    <div className={styles.card}>
                        <i className="fas fa_handshake"></i>
                        <p>Receita Bruta</p>
                        <h2>R$ 136.000</h2>
                    </div>
                    <div className={styles.card}>
                        <i className="fas fa-hand-holding-usd"></i>
                        <p>Receita Líquida</p>
                        <h2>R$ 40.800</h2>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Financeiro;
