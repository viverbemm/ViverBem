import React, { useState } from 'react';
import styles from './Bem_vindo_gestao.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavGestao from '../layout/navGestao';
import 'bootstrap/dist/css/bootstrap.min.css';



function BemVindoGestao() {

    return (
        <div className={styles.pageBackground}>
            <NavGestao />
            <main className={styles.text}>
                <section className={styles.section}>
                    <h1><b>Bem-vindo(a), Admin</b></h1>
                   

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


                </section>

                <div className={styles.contatos}>

                    <ul>
                        <li className="fa-brands fa-square-whatsapp"><b> (27) 99999-2020 </b></li>
                        <hr />
                       
                        <li className="fa fa-phone"><b> 0800 102 0880 </b></li>
                        <hr />

                        <li className="fa fa-envelope"><b> suporteviverbem@gmail.com </b></li>
                        <hr />

                    </ul>

                </div>
            </main>
        </div>
    );
}

export default BemVindoGestao;
