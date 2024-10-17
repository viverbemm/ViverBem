import React from 'react';
import './Bem_vindo.module.css';


function BemVindoGestao() {
    return (
        <div>
            {/* Navbar */}
            <header>
                <div className="navbar">
                    <span><b>Olá Administrador</b></span>
                    <div className="menu">
                        <button className="menu-btn"><b>MENU</b></button>
                        <ul className="dropdown">
                            <li><a href="#">Financeiro</a></li>
                            <li><a href="#">Configurações</a></li>
                            <li><a href="#">Relatórios e Estatísticas</a></li>
                            <li><a href="#">Controle de Usuários</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <h1>Bem-vindo(a), Admin</h1>
                <h2>ViverBem+<br />Sistema de Gerenciamento</h2>

                <section className="section">
                    <h3>Sobre a empresa</h3>
                    <p>O ViverBem+ conecta idosos com profissionais especializados em cuidados,</p>
                    <p>O objetivo é facilitar o encontro entre famílias e cuidadores qualificados, garantindo assistência de qualidade e personalizada para as necessidades de cada idoso.</p>
                    <p>Oferecendo uma plataforma segura e prática.</p>
                </section>

                <section className="section">
                    <h3>Localização</h3>
                    <p>O ViverBem+ teve início no Espírito Santo, na unidade de Vila Velha, residindo no seguinte endereço:</p>
                    <p>Centro Empresarial, Shopping Praia da Costa, Praia da Costa – Vila Velha - ES, e possui abrangência de uso apenas a esta região.</p>
                </section>

                <section className="section">
                    <h3>Como obter suporte?</h3>
                    <p>Caso existam problemas, os admins do ViverBem+ poderão entrar em contato com os canais de atendimento:</p>
                    <p>Opções: WhatsApp, Email e Telefone.</p>
                </section>
            </main>

            {/* Footer */}
            <div className="contact">
                <h3><i className="fa fa-whatsapp"></i> (27) 99999-2020</h3>
                <h3><i className="fa fa-envelope"></i> suporteviverbem@gmail.com</h3>
                <h3><i className="fa fa-phone"></i> 0800 102 0880</h3>
            </div>

            <div className="logo">
                <img src="img/logo.png" alt="ViverBem+ Logo" />
            </div>
        </div>
    );
}

export default BemVindoGestao;
