import React, { useState } from 'react';
import styles from './Bem_vindo_gestao.module.css';

function BemVindoGestao() {


    return (
        <div className={styles.pageBackground}>

            <header>
                <div className={styles.navbarRight}>
                    <span><b>Olá Administrador</b></span>
                </div>

                <div className={styles.navbarLeft}>
                    <a href="/Financeiro"><b>Financeiro</b></a>
                    <a href="/Controle"><b>Controle de Usuários</b></a>
                    <a href="/CadastrarAdmin"><b>Cadastrar Admin</b></a>
                    <a href="/EditarAdmin"><b>Editar Admin</b></a>
                </div>

            </header>


            <main className={styles.text}>
                <section className={styles.section}>
                    <h1><b>Bem-vindo(a), Admin</b></h1>
                    <h2><b>ViverBem+</b><br /><b>Sistema de Gerenciamento</b></h2>

                    <h3><b>Sobre a empresa</b></h3>
                    <p>O ViverBem+ conecta idosos com profissionais especializados em cuidados,</p>
                    <p>O objetivo é facilitar o encontro entre famílias e cuidadores qualificados, garantindo assistência de qualidade e personalizada para as necessidades de cada idoso.</p>
                    <p>Oferecendo uma plataforma segura e prática.</p>

                    <h3><b>Localização</b></h3>
                    <p>O ViverBem+ teve início no Espírito Santo, na unidade de Vila Velha, residindo no seguinte endereço:</p>
                    <p>Centro Empresarial, Shopping Praia da Costa, Praia da Costa – Vila Velha - ES, e possui abrangência de uso apenas a esta região.</p>

                    <h3><b>Como obter suporte?</b></h3>
                    <p>Caso existam problemas, os admins do ViverBem+ poderão entrar em contato com os canais de atendimento:</p>
                    <p>Opções: WhatsApp, Email e Telefone.</p>
                    <h3><i className="fa fa-whatsapp"></i> <b>(27) 99999-2020</b></h3>
                    <h3><i className="fa fa-envelope"></i> <b>suporteviverbem@gmail.com</b></h3>
                    <h3><i className="fa fa-phone"></i> <b>0800 102 0880</b></h3>
                </section>
            </main>


            <div className={styles.logo}>
                <img src="img/logo.png" alt="ViverBem+ Logo" />
            </div>
        </div>
    );
}

export default BemVindoGestao;
