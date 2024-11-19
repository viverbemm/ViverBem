import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PaginaInicial.module.css';
import NavInicial from '../layout/navInicial';
import NavInferior from '../layout/navInferior';
import Laura from '../pages/imagens/laura.webp';
import Leo from '../pages/imagens/leo.webp';
import Carolina from '../pages/imagens/baixados.webp';

function PaginaInicial() {
    const navigate = useNavigate();

    return (
        <div>
            <NavInicial />
            <main className={styles.mainn}>
                {/* Banner principal */}
                <div className={styles.containerDoInicio}>
                    <section className={styles.comecando}>
                        <h1 className={styles.h11}>
                            <b className={styles.cuidador}>
                                Encontre o Cuidador Ideal para o Idoso que Você Ama
                            </b>
                        </h1>
                        <p className={styles.textoInicial}>
                            {`Conectamos cuidadores de confiança a idosos que precisam de atenção, cuidado e companhia.`} <br />
                            {`Nosso site é uma plataforma de fácil navegação, onde você pode encontrar profissionais qualificados`} <br />
                            {`para ajudar seu ente querido no dia a dia, garantindo um atendimento humanizado e seguro.`}
                        </p>
                        {/* Botões de ação */}
                        <div className={styles.botoesAcoes}>
                            <button
                                className={styles.botaoPrimario}
                                onClick={() => navigate('/cadastro')}
                            >
                                Cadastre-se como Cuidador
                            </button>
                            <button
                                className={styles.botaoSecundario}
                                onClick={() => navigate('/tela_profissionais')}
                            >
                                Explore Cuidadores
                            </button>
                        </div>
                    </section>
                </div>

                {/* Seção de depoimentos */}
                <section className={styles.depoimentos}>
                    <h2>O que dizem sobre nós</h2>
                    <div className={styles.cardsDepoimentos}>
                        <div className={styles.card}>
                            <img className={styles.imginicial} src={Laura} alt="Laura" />
                            <h3>Laura Silva</h3>
                            <span className={styles.data}>10 de Outubro de 2023</span>
                            <p>
                                "Graças ao site, encontramos uma cuidadora incrível para nossa mãe. Recomendo!"
                            </p>
                            <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
                        </div>
                        <div className={styles.card}>
                            <img  className={styles.imginicial} src={Leo} alt="Leo" />
                            <h3>Leo Pereira</h3>
                            <span className={styles.data}>5 de Novembro de 2023</span>
                            <p>
                                "Ser cadastrado aqui aumentou minhas oportunidades de trabalho. Obrigado!"
                            </p>
                            <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
                        </div>
                        <div className={styles.card}>
                        <img className={styles.imginicial} src={Carolina} alt="Carolina" />
                            <h3>Carolina Oliveira</h3>
                            <span className={styles.data}>20 de Setembro de 2023</span>
                            <p>
                                "O site facilitou muito nossa busca por um profissional confiável."
                            </p>
                            <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </section>

            </main>
            <NavInferior />
        </div>
    );
}

export default PaginaInicial;
