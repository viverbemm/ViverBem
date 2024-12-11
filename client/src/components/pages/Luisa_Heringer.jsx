import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import stylesP from './Luisa_Heringer.module.css';
import profilePic from '../pages/imagens/luisa.webp';
import NavInferior from '../layout/navInferior';
import email from '../pages/imagens/email.png';
import coin from '../pages/imagens/coin.png';
import React, { useState } from 'react';
import NavBar from '../layout/navBar';

function Profissional() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuShow = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: '#c2c2f8', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <section className={stylesP.intro}>
        <div className={stylesP.containerI}>
          <img src={profilePic} alt="Luísa Heringer" className={stylesP.profilePic} />
          <div className={stylesP.introText}>
            <h1 style={{
              color: '#23008D',
              marginLeft: '13%',
              fontSize: '30px',
              marginBottom: '20px'
            }}><b>Olá, eu sou a Luísa Heringer.</b></h1>
            <p className={stylesP.introText_p}>
              <p className={stylesP.pI}>Meu nome é Luísa Heringer, tenho o privilégio de dedicar</p>
              <p className={stylesP.pII}>minha vida ao cuidado dos idosos há 3 anos e 6 meses.</p>
              <p className={stylesP.pIII}>Minha paixão por esta profissão é impulsionada pela</p>
              <p className={stylesP.pIV}>empatia e respeito pelos idosos, sendo meu objetivo</p>
              <p className={stylesP.pV}>proporcionar uma qualidade de vida excepcional</p>
              <p className={stylesP.pVI}>àqueles que confiam em meus cuidados.</p>
            </p>
          </div>
        </div>
      </section>

      <section className={stylesP.about}>
        <div className={stylesP.containerII}>
          <div className={stylesP.desenvol}>
            <strong><h3 style={{
              fontSize: '30px',
              marginLeft: '90px',
              marginBottom: '-10px'
            }}><b>Sobre mim:</b></h3></strong>
            <p>ﾠ</p>
            <p className={stylesP.pI}>Experiência Profissional: Cuidadora de Idosos.</p>
            <p className={stylesP.pII}>Cuidadora autônoma para idoso com doença de Parkinson avançada (2020-2023).</p>
            <p className={stylesP.pIII}>Durante 3 anos e 6 meses, atuei como cuidadora autônoma dedicada a um senhor idoso</p>
            <p className={stylesP.pIV}>diagnosticado com doença de Parkinson avançada. Minhas responsabilidades incluíam:</p>
            <ul style={{
              marginLeft: '90px'
            }}>
              <p>ﾠ</p>
              <li>Assistência diária</li>
              <li>Gerenciamento de sintomas</li>
              <li>Estimulação cognitiva</li>
              <li>Fisioterapia e exercícios</li>
              <li>Suporte emocional</li>
              <li>Coordenação com profissionais de saúde</li>
            </ul>
            <p>ﾠ</p>
            <p className={stylesP.pIII}>Essa experiência não apenas aprimorou minhas habilidades práticas, mas também reforçou</p>
            <p className={stylesP.pIII}>minha compreensão da importância do cuidado holístico e individualizado para idosos que</p>
            <p className={stylesP.pIII}>enfrentam condições de saúde complexas.</p>
          </div>
        </div>
      </section>

      <section className={stylesP.cont}>
        <div className={stylesP.containerIII}>
          <h1 className={stylesP.ato}><b>Contatos:</b></h1>
          <p style={{ fontSize: '18px' }}><img src={email} alt="email" className={stylesP.email} /><strong style={{
            color: '#23008D',
            marginLeft: '2%',
          }}>Email:</strong> luisaheringer@gmail.com</p>
          <p style={{ fontSize: '18px' }}><img src={telephone} alt="telephone" className={stylesP.telephone} /><strong style={{
            color: '#23008D',
            marginLeft: '2%',
            fontSize: '18px',
          }}>Telefone:</strong> (27) 99999-2121</p>
          <h1 style={{ fontSize: '30px', marginLeft: '60%', marginTop: '-12.5%' }}><b>Diária:</b></h1>
          <img style={{ height: '35px', width: '35px', marginLeft: '45%', marginTop: '2%' }} src={coin} alt="telephone" />
          <p style={{
            marginLeft: '62.2%',
            fontSize: '18px',
            marginTop: '-2.2%'
          }}>R$ 210,00</p>
        </div>
      </section>
      <NavInferior />
    </div>
  );
}


export default Profissional;