import React from 'react';
import styles from './PaginaInicial.module.css';

function PaginaInicial() {
    return (
        <div>
            <main>

                <section className={styles.comecando}>
                    <h1 className={styles.h1}><b>Encontre o Cuidador Ideal para o Idoso que Você Ama</b></h1>
                    <p className={styles.p1}>Conectamos cuidadores de confiança a idosos que precisam de atenção, cuidado e companhia.</p>
                    <p className={styles.p2}>Nosso site é uma plataforma de fácil navegação, onde você pode encontrar profissionais qualificados</p>
                    <p className={styles.p3}>para ajudar seu ente querido no dia a dia, garantindo um atendimento humanizado e seguro.</p>
                    <p className={styles.p4}>Para os cuidadores, oferecemos um catálogo virtual que amplia a visibilidade de seus serviços.</p>
                    <p className={styles.p5}>Por uma taxa acessível, de R$ 29,90 mensais ou R$ 299,90 anuais, os cuidadores têm seus contatos exibidos no site,</p>
                    <p className={styles.p6}>conectando-se a famílias que buscam assistência especializada.</p>
                    <p className={styles.p7}>Aqui, valorizamos o cuidado e a confiança. Explore nosso site e encontre o suporte ideal para quem você ama, ou cadastre-se como cuidador e expanda seu alcance profissional.</p>



                    <p>
                        {`Conectamos cuidadores de confiança a idosos que precisam de atenção, cuidado e companhia. Nosso site é uma plataforma de fácil navegação, onde você pode encontrar profissionais qualificados para ajudar seu ente querido no dia a dia, garantindo um atendimento humanizado e seguro.

                          Para os cuidadores, oferecemos um catálogo virtual que amplia a visibilidade de seus serviços. Por uma taxa acessível, de R$ 29,90 mensais ou R$ 299,90 anuais, os cuidadores têm seus contatos exibidos no site, conectando-se a famílias que buscam assistência especializada.

                          Aqui, valorizamos o cuidado e a confiança. Explore nosso site e encontre o suporte ideal para quem você ama, ou cadastre-se como cuidador e expanda seu alcance profissional.`}
                    </p>



                </section>


            </main>


        </div>
    );
}

export default PaginaInicial;
