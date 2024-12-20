import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PaginaInicial.module.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';
import Laura from '../pages/imagens/laura.webp';
import Leo from '../pages/imagens/leo.webp';
import Carolina from '../pages/imagens/baixados.webp';

function PaginaInicial() {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar />
            <main style={{ backgroundColor: '#c2c2f8', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {/* Banner principal */}
                <h1>ﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠ</h1>
                <section className={styles.comecando}>
                    <section style={{
                        border: '1px solid #ddd',
                        borderRadius: '30px',
                        marginBottom: '30px',
                        width: '83%',
                        backgroundColor: '#E6E6FA',
                        padding: '40px'
                    }}>
                        <h1 className={styles.h11}>
                            <b className={styles.cuidador}>
                                Encontre o cuidador ideal para o idoso que você ama
                            </b>
                        </h1>
                        <p className={styles.textoInicial}>
                            {`Conectamos cuidadores de confiança a idosos que precisam de atenção, cuidados e companhia.`} <br />
                            {`Nosso site é uma plataforma de fácil navegação, onde você encontrará profissionais qualificados`} <br />
                            {`para ajudar seu ente querido no dia a dia, garantindo um atendimento humanizado e profissional.`} <br /><br />
                            {`Para os cuidadores, oferecemos um catálogo virtual que amplia a visibilidade de seus serviços.`} <br />
                            {`Por uma taxa acessível, de `}
                            <strong className={styles.valorMensal}>R$ 29,90 mensal</strong> {` ou `} <strong className={styles.valorAnual}>R$ 299,90 anual</strong>, {` os cuidadores têm seu perfil`} <br />
                            {`divulgado em nossa plataforma, conectando-se a famílias que buscam assistência especializada.`} <br /><br />

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
                </section>

                {/* Seção de depoimentos */}
                <section className={styles.depoimentos}>
                    <h2><b>O que dizem sobre nós</b></h2>
                    <h1>ﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠ</h1>
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
        </div >
    );
}

export default PaginaInicial;
