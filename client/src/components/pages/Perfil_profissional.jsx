import React, { useState } from 'react';
import profileMenu from './assets/img/menu_white_36dp.svg';
import profilePic from '../pages/imagens/luisa.webp';
import stylesP from './Perfil_Profissional.module.css';
import stylesM from './Menu_superior.module.css';
import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import email from '../pages/imagens/email.png';

function Profissional() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuShow = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: '#E6E6FA', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className={stylesP.header}>
        <nav className={stylesM.nav_bar}>
          <div className={stylesM.logo}>
            <h1>ViverBem+</h1>
          </div>
          <div className={stylesM.nav_list}>
            <ul>
              <li className={stylesM.nav_item}>
                <a className={stylesM.nav_link}>Página inicial</a>
              </li>
              <li className={stylesM.nav_item}>
                <a className={stylesM.nav_link}>Login</a>
              </li>
            </ul>
          </div>
          <div className={stylesM.mobile_menu_icon}>
            <button onClick={menuShow}>
              <img src={profileMenu} alt="Menu Icon" />
            </button>
          </div>
        </nav>

        <div className={`${stylesM.mobile_menu} ${menuOpen ? stylesM.open : ''}`}>
          <ul>
            <li className={stylesM.nav_item}>
              <a href="#" className={stylesM.nav_link}>Página inicial</a>
            </li>
            <li className={stylesM.nav_item}>
              <a href="#" className={stylesM.nav_link}>Login</a>
            </li>
          </ul>
        </div>
      </header>

      <section className={stylesP.intro}>
        <div className={stylesP.containerI}>
          <img src={profilePic} alt="Luísa Heringer" className={stylesP.profilePic} />
          <div className={stylesP.introText}>
            <h2>Olá, eu sou a Luísa Heringer.</h2>
            <p className={stylesP.introText_p}>
              Meu nome é Luísa Heringer, e tenho o privilégio de dedicar minha vida ao cuidado dos idosos há 3 anos e 6 meses.
              Minha paixão por esta profissão é impulsionada pela empatia e respeito pelos idosos, e meu objetivo é proporcionar
              uma qualidade de vida excepcional para aqueles que confiam em meus cuidados.
            </p>
          </div>
        </div>
      </section>

      <section className={stylesP.about}>
        <div className={stylesP.containerII}>
          <div className={stylesP.desenvol}>
            <strong><h3>Sobre mim:</h3></strong>
            <p>Experiência Profissional: Cuidadora de Idosos</p>
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
        </div>
      </section>

      <section className={stylesP.cont}>
        <div className={stylesP.containerIII}>
          <h1 className={stylesP.ato}>Contato</h1>
          <p><img src={email} alt="email" className={stylesP.email} /><strong>Email:</strong> luisaheringer@gmail.com</p>
          <p><img src={telephone} alt="telephone" className={stylesP.telephone} /><strong>Telefone:</strong> (27) 99999-2121</p>
          <div className={stylesP.reservar}>
            <p className={stylesP.text}>Estou sempre em busca de novas</p>
            <p className={stylesP.text}>oportunidades. Entre em contato.</p>
            <a href="#" className={stylesP.button}>Reservar</a>
          </div>
        </div>
      </section>

      <section className={stylesP.rod}>
        <div className={stylesP.containerIV}>
          <h1 className={stylesP.rodape}>ViverBem+</h1>
          <p className={stylesP.controd}>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
        </div>
      </section>
    </div>
  );
}

export default Profissional;