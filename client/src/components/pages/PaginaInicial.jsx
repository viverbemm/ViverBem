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
                            {`para ajudar seu ente querido no dia a dia, garantindo um atendimento humanizado e seguro.`} <br /><br />
                            {`Para os cuidadores, oferecemos um catálogo virtual que amplia a visibilidade de seus serviços.`} <br />
                            {`Por uma taxa acessível, de `}
                            <strong className={styles.valorMensal}>R$ 29,90 mensais</strong> {` ou `} <strong className={styles.valorAnual}>R$ 299,90 anuais</strong>, {` os cuidadores têm seus contatos`} <br />
                            {`exibidos no site, conectando-se a famílias que buscam assistência especializada.`} <br /><br />

                        </p>
                        {/* Botões de ação */}
                        <div className={styles.botoesAcoes}>
                            <button
                                className={styles.botaoPrimario}
                                onClick={() => navigate('/tela_profissionais')}
                            >
                                Explore Cuidadores

                            </button>
                            <button
                                className={styles.botaoSecundario}
                                onClick={() => navigate('/cadastro')}
                            >
                                Cadastre-se como Cuidador
                            </button>
                        </div>
                    </section>
                </div>

                {/* Seção de depoimentos */}
                <section className={styles.depoimentos}>
                    <h2><b>O que dizem sobre nós</b></h2>
                    <div className={styles.cardsDepoimentos}>
                        <div className={styles.card}>
                            <img className={styles.imginicial} src={Laura} alt="Laura" />
                            <h3><b>Laura Silva</b></h3>
                            <span className={styles.data}>10 de Outubro de 2023</span>
                            <p>
                                "Ser cadastrada aqui aumentou minhas oportunidades de trabalho. Obrigado!"
                            </p>
                            <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.imginicial} src={Leo} alt="Leo" />
                            <h3><b>Leo Pereira</b></h3>
                            <span className={styles.data}>5 de Novembro de 2023</span>
                            <p>
                                "Graças ao site, encontramos uma cuidadora incrível para nossa mãe. Recomendo!"

                            </p>
                            <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.imginicial} src={Carolina} alt="Carolina" />
                            <h3><b>Carolina Oliveira</b></h3>
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
