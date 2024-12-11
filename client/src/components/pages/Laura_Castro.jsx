import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import stylesP from './Laura_Castro.module.css';
import profilePic from '../pages/imagens/laura.webp';
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
          <img src={profilePic} alt="Laura Castro" className={stylesP.profilePic} />
          <div className={stylesP.introText}>
            <h1 style={{
              color: '#23008D',
              marginLeft: '13%',
              fontSize: '30px',
              marginBottom: '20px'
            }}><b>Olá, eu sou a Laura Castro.</b></h1>
            <p className={stylesP.introText_p}>
              <p className={stylesP.pI}>Meu nome é Laura Castro, tenho dedicado os meus</p>
              <p className={stylesP.pII}>últimos 1 ano e 2 meses à profissão de cuidadora</p>
              <p className={stylesP.pIII}>de idosos. Essa jornada tem sido profundamente</p>
              <p className={stylesP.pIV}>gratificante, pois me permite transformar carinho</p>
              <p className={stylesP.pV}>e atenção em conforto e segurança para aqueles</p>
              <p className={stylesP.pVI}>que precisam de cuidado especial e assistência.</p>
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
            <p className={stylesP.pII}>Cuidadora autônoma com experiência em assistência a idosos com limitações físicas e cognitivas (2023).</p>
            <p className={stylesP.pIII}>Nos últimos meses, tive a oportunidade de trabalhar com idosos de diferentes idades e condições de saúde,</p>
            <p className={stylesP.pIV}>adaptando meus cuidados às necessidades específicas de cada um. Entre minhas responsabilidades, destaco:</p>
            <ul style={{
              marginLeft: '90px'
            }}>
              <p>ﾠ</p>
              <li>Monitoramento constante da saúde e bem-estar</li>
              <li>Assistência em atividades diárias como alimentação, higiene e mobilidade</li>
              <li>Estímulos físicos e mentais para preservar a qualidade de vida</li>
              <li>Administração de medicamentos e cuidados médicos</li>
              <li>Apoio emocional e psicológico para o idoso e seus familiares</li>
              <li>Comunicação constante com a equipe de saúde para uma abordagem multidisciplinar</li>
            </ul>
            <p>ﾠ</p>
            <p className={stylesP.pIII}>Essa experiência me proporcionou um grande aprendizado sobre como o cuidado deve ser individualizado,</p>
            <p className={stylesP.pIII}>respeitoso e humanizado, sempre levando em conta as necessidades físicas e emocionais de cada idoso.</p>
          </div>

        </div>
      </section>

      <section className={stylesP.cont}>
        <div className={stylesP.containerIII}>
          <h1 className={stylesP.ato}><b>Contatos:</b></h1>
          <p style={{ fontSize: '18px' }}><img src={email} alt="email" className={stylesP.email} /><strong style={{
            color: '#23008D',
            marginLeft: '2%',
          }}>Email:</strong> lauracass@gmail.com</p>
          <p style={{ fontSize: '18px' }}><img src={telephone} alt="telephone" className={stylesP.telephone} /><strong style={{
            color: '#23008D',
            marginLeft: '2%',
            fontSize: '18px',
          }}>Telefone:</strong> (27) 93865-8514</p>
          <h1 style={{ fontSize: '30px', marginLeft: '60%', marginTop: '-12.5%' }}><b>Diária:</b></h1>
          <img style={{ height: '35px', width: '35px', marginLeft: '45%', marginTop: '2%' }} src={coin} alt="telephone" />
          <p style={{
            marginLeft: '62.2%',
            fontSize: '18px',
            marginTop: '-2.2%'
          }}>R$ 210,90</p>
        </div>
      </section>
      <NavInferior />
    </div>
  );
}

export default Profissional;