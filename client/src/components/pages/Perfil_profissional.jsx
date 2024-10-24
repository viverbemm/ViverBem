import React from 'react';
import '../pages/Perfil_Profissional.module.css';
import '../pages/assets/css/estilo.css';
import menuIcon from './assets/img/menu_white_36dp.svg'; 
import profilePic from '../pages/imagens/luisa.webp';

const App = () => {
  const menuShow = () => {
    
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>ViverBem+</h1>
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item"><a href="#" className="nav-link">Página inicial</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
            </ul>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <img className="icon" src={menuIcon} alt="Menu" />
            </button>
          </div>
        </nav>

        <div className="mobile-menu">
          <ul>
            <li className="nav-item"><a href="#" className="nav-link">Página inicial</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
          </ul>
        </div>
      </header>

      <section className="intro">
        <div className="container">
          <img src={profilePic} alt="Luísa Heringer" className="profile-pic" />
          <div className="intro-text">
            <h2>Olá, eu sou a Luísa Heringer.</h2>
            <p>
              Meu nome é Luísa Heringer, e tenho o privilégio de dedicar minha vida ao cuidado dos idosos há 3 anos e 6 meses.
              Minha paixão por esta profissão é impulsionada pela empatia e respeito pelos idosos, e meu objetivo é proporcionar
              uma qualidade de vida excepcional para aqueles que confiam em meus cuidados.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h3>Sobre mim:</h3>
          <p><strong>Experiência Profissional: Cuidadora de Idosos</strong></p>
          <p>Cuidadora autônoma para idoso com doença de Parkinson avançada (2020-2023)</p>
          <p>
            Durante 3 anos e 6 meses, atuei como cuidadora autônoma dedicada a um senhor idoso diagnosticado com
            doença de Parkinson avançada. Minhas responsabilidades incluíam:
          </p>
          <ul>
            <li>Assistência diária</li>
            <li>Gerenciamento de sintomas</li>
            <li>Estimulação cognitiva</li>
            <li>Fisioterapia e exercícios</li>
            <li>Suporte emocional</li>
            <li>Coordenação com profissionais de saúde</li>
          </ul>
          <p>
            Essa experiência não apenas aprimorou minhas habilidades práticas, mas também reforçou minha compreensão
            da importância do cuidado holístico e individualizado para idosos que enfrentam condições de saúde complexas.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h3>Contato</h3>
          <p><strong>Email:</strong> luisaheringer@gmail.com</p>
          <p><strong>Telefone:</strong> (27) 99999-2121</p>
          <a href="#" className="button">Reservar</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>ViverBem+</p>
          <p>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
        </div>
      </footer>
    </>
  );
};

export default App;
