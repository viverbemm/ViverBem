import React, { useState } from 'react';
import styles from './Financeiro.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import NavGestao from '../layout/navGestao';

function Financeiro() {
    const [dataInicio, setDataInicio] = useState('2024-06-01');
    const [dataFim, setDataFim] = useState('2024-06-30');
    const [receitaBruta, setReceitaBruta] = useState(0);
    const [receitaLiquida, setReceitaLiquida] = useState(0);

    const gerarReceitas = () => {
        const bruta = Math.floor(Math.random() * 100000);
        const liquida = bruta - (bruta * 0.2);

        setReceitaBruta(bruta);
        setReceitaLiquida(liquida);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        gerarReceitas();
    };



    return (
        <div>
            <NavGestao />

            <div className={styles.pageBackground}>



                <main>
                    <div className={styles.gerar}>

                        <h1><b>Resumo Financeiro</b></h1>
                        <form onSubmit={handleSubmit} className={styles.filters}>
                            <input
                                type="date"
                                value={dataInicio}
                                onChange={(e) => setDataInicio(e.target.value)}
                            />
                            <input
                                type="date"
                                value={dataFim}
                                onChange={(e) => setDataFim(e.target.value)}
                            />

                            <button type="submit" className={styles.search_btn}>
                                <i className="fas fa-search"></i> Pesquisar
                            </button>
                        </form>
                        <div className={styles.results}>
                            <div className={styles.card}>
                                <i className="fas fa-handshake"></i>
                                <p>Receita Bruta</p>
                                <h2>R$ {receitaBruta.toLocaleString()}</h2>
                            </div>
                            <div className={styles.card}>
                                <i className="fas fa-hand-holding-usd"></i>
                                <p>Receita Líquida</p>
                                <h2>R$ {receitaLiquida.toLocaleString()}</h2>
                            </div>
                        </div>

                    </div>




                </main>

            </div>
        </div>


    );
}

export default Financeiro;
