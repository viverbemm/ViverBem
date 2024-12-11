import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import stylesP from './Gabriel_Lopes.module.css';
import profilePic from '../pages/imagens/gabriel.webp';
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
          <img src={profilePic} alt="Gabriel Lopes" className={stylesP.profilePic} />
          <div className={stylesP.introText}>
            <h1 style={{
              color: '#23008D',
              marginLeft: '13%',
              fontSize: '30px',
              marginBottom: '20px'
            }}><b>Olá, eu sou o Gabriel Lopes.</b></h1>
            <p className={stylesP.introText_p}>
              <p className={stylesP.pI}>Meu nome é Gabriel Lopes, sou cuidador de idosos</p>
              <p className={stylesP.pII}>há mais de 2 anos. Durante esse tempo, tive a honra</p>
              <p className={stylesP.pIII}>de dedicar minha vida a oferecer cuidados e apoio</p>
              <p className={stylesP.pIV}>a pessoas que merecem atenção, carinho e dignidade</p>
              <p className={stylesP.pV}>em cada fase de suas vidas. Minha missão é criar um</p>
              <p className={stylesP.pVI}>ambiente de confiança e conforto para meus clientes.</p>
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
            <p className={stylesP.pI}>Experiência Profissional: Cuidador de Idosos.</p>
            <p className={stylesP.pII}>Atualmente atuo como cuidador autônomo com ampla experiência</p>
            <p className={stylesP.pIII}>em assistência a idosos, incluindo aqueles com necessidades físicas e cognitivas específicas.</p>
            <p className={stylesP.pIV}>Minha trajetória começou em 2021, e desde então tenho cuidado</p>
            <p className={stylesP.pIV}>de idosos com respeito, empatia e dedicação. Entre minhas</p>
            <p className={stylesP.pIV}>responsabilidades, destaco:</p>
            <ul style={{
              marginLeft: '90px'
            }}>
              <p>ﾠ</p>
              <li>Supervisão constante do estado de saúde e bem-estar.</li>
              <li>Assistência em atividades como alimentação, higiene e locomoção.</li>
              <li>Realização de exercícios físicos e estímulos cognitivos.</li>
              <li>Administração e organização de medicamentos.</li>
              <li>Apoio emocional para os idosos e suas famílias.</li>
              <li>Colaboração com equipes de saúde para um cuidado integrado.</li>
            </ul>
            <p>ﾠ</p>
            <p className={stylesP.pIII}>Essa vivência me ensinou que o cuidado com idosos vai além</p>
            <p className={stylesP.pIII}>das tarefas diárias: é sobre oferecer acolhimento, promover</p>
            <p className={stylesP.pIII}>independência e respeitar a individualidade de cada pessoa.</p>
          </div>
        </div>
      </section>

      <NavInferior />
    </div>
  );
}

export default Profissional;