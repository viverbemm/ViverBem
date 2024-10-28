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
    const [clientes, setClientes] = useState(1000); // Exemplo de valor
    const [profissionais, setProfissionais] = useState(800); // Exemplo de valor

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

    const dataGrafico = [
        { tipo: 'Clientes', quantidade: clientes },
        { tipo: 'Profissionais', quantidade: profissionais },
    ];

    return (
        <div className={styles.pageBackground}>

            <NavGestao />

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

                <div className={styles.grafico}> 

                    <h2><b>Estatísticas de Usuários</b></h2>
                    <BarChart width={700} height={400} data={dataGrafico}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tipo" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quantidade" fill="#8884d8" />
                    </BarChart>


                </div>


            </main>

        </div>


    );
}

export default Financeiro;
