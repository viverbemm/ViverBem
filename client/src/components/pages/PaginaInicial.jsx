import React from 'react';
import styles from './PaginaInicial.module.css';

function PaginaInicial() {
    return (
        <div>
            <main className={styles.main}>

                <div className={styles.containerDoInicio}>
                    <section className={styles.comecando}>
                        <h1 className={styles.h1}><b className={styles.cuidador}>Encontre o Cuidador Ideal para o Idoso que Você Ama</b></h1>
                        <p className={styles.textoInicial}>
                            {`Conectamos cuidadores de confiança a idosos que precisam de atenção, cuidado e companhia.`} <br />
                            {`Nosso site é uma plataforma de fácil navegação, onde você pode encontrar profissionais qualificados`} <br />
                            {`para ajudar seu ente querido no dia a dia, garantindo um atendimento humanizado e seguro.`} <br /><br />
                            {`Para os cuidadores, oferecemos um catálogo virtual que amplia a visibilidade de seus serviços.`} <br />
                            {`Por uma taxa acessível, de `} 
                            <strong className={styles.valorMensal}>R$ 29,90 mensais</strong> {` ou `} <strong className={styles.valorAnual}>R$ 299,90 anuais</strong>, {` os cuidadores têm seus contatos`} <br />
                            {`exibidos no site, conectando-se a famílias que buscam assistência especializada.`} <br /><br />
                            {`Aqui, valorizamos o cuidado e a confiança. Explore nosso site e encontre o suporte ideal para quem você ama,`} <br />
                            {`ou cadastre-se como cuidador e expanda seu alcance profissional.`}
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default PaginaInicial;
