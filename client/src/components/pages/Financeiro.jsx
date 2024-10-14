import React from 'react';
import './Financeiro.module.css';


function Financeiro() {
    return (
        <div>
            <header>
                <div className="navbar">
                    <span><b>Olá Administrador</b></span>
                    <div className="menu">
                        <button className="menu-btn"><b>MENU</b></button>
                        <ul className="dropdown">
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
                <div className="filters">
                    <input type="date" defaultValue="2024-06-01" />
                    <input type="date" defaultValue="2024-06-30" />
                    <select>
                        <option>Consultar</option>
                    </select>
                    <button className="search-btn">
                        <i className="fas fa-search"></i> Pesquisar
                    </button>
                </div>

                <div className="results">
                    <div className="card">
                        <i className="fas fa-handshake"></i>
                        <p>Receita Bruta</p>
                        <h2>R$ 136.000</h2>
                    </div>
                    <div className="card">
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
