import React from 'react';
import styles from './Perfil_Profissional.module.css';


function Profissional() {
    return (
        <div>
            {/* Navbar */}
            <header>
                <div className={styles.navbar}>
                    <span><b>Olá Administrador</b></span>
                    <div className={styles.menu}>
                        <button className={styles.menu_btn}><b>MENU</b></button>
                        <ul className={styles.dropdow}>
                            <li><a href="#">Financeiro</a></li>
                            <li><a href="#">Configurações</a></li>
                            <li><a href="#">Relatórios e Estatísticas</a></li>
                            <li><a href="/Controle">Controle de Usuários</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <h1>Olá, eu sou a Luísa Heringer</h1>
                <h2 className={styles.h2}>Meu nome é Luísa Heringer, e tenho o privilégio de dedicar minha vida ao cuidado dos idosos há 3 anos e 6 meses. Minha paixão por esta profissão é impulsionada pela empatia e respeito pelos idosos, e meu objetivo é proporcionar uma qualidade de vida excepcional para aqueles que confiam em meus cuidados. </h2>

                <div className={styles.container}>
                    <section className={styles.section}>
                        <h3>Sobre mim</h3>
                        <p className={styles.p8}>Experiência Profissional: Cuidadora de Idosos
                            Cuidadora autônoma para idoso com doença de Parkinson avançada (2020-2023)
                            Durante 3 anos e 6 meses, atuei como cuidadora autônoma dedicada a um senhor idoso diagnosticado com doença de Parkinson avançada. Minhas responsabilidades incluíam:</p>

                        <p className={styles.p1}>Assistência diária</p>
                        <p className={styles.p2}>Gerenciamento de sintomas</p>
                        <p className={styles.p3}>Estimulação cognitiva</p>
                        <p className={styles.p4}>Fisioterapia e exercícios</p>
                        <p className={styles.p5}>Suporte emocional</p>
                        <p className={styles.p6}>Coordenação com profissionais de saúde</p>
                        <p className={styles.p7}>Essa experiência não apenas aprimorou minhas habilidades práticas, mas também reforçou minha compreensão da importância do cuidado holístico e individualizado para idosos que enfrentam condições de saúde complexas.</p>

                    </section>
                </div>
            </main>
            <div className={styles.logo}>
                <img src="img/logo.png" alt="ViverBem+ Logo" />
            </div>
        </div>
    );
}
// asdasdasdas
export default Profissional;