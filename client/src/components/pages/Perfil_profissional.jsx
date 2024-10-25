import React from 'react';
import menuIcon from '../pages/assets/img/menu_white_36dp.svg';
import profilePic from '../pages/imagens/luisa.webp';

const App = () => {
  const menuShow = () => {
    
  };

  return (
    <>
     

      <section style={styles.intro}>
        <div style={styles.container}>
          <img src={profilePic} alt="Luísa Heringer" style={styles.profilePic} />
          <div style={styles.introText}>
            <h2>Olá, eu sou a Luísa Heringer.</h2>
            <p>
              Meu nome é Luísa Heringer, e tenho o privilégio de dedicar minha vida ao cuidado dos idosos há 3 anos e 6 meses.
              Minha paixão por esta profissão é impulsionada pela empatia e respeito pelos idosos, e meu objetivo é proporcionar
              uma qualidade de vida excepcional para aqueles que confiam em meus cuidados.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.about}>
        <div style={styles.container}>
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

      <section style={styles.contact}>
        <div style={styles.container}>
          <h3>Contato</h3>
          <p><strong>Email:</strong> luisaheringer@gmail.com</p>
          <p><strong>Telefone:</strong> (27) 99999-2121</p>
          <a href="#" style={styles.button}>Reservar</a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>ViverBem+</p>
          <p>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
        </div>
      </footer>
    </>
  );
};

const styles = {
  header: {
    backgroundColor: '#c0c0f2',
    width: '100%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
  },
  logo: {
    width: '70%',
  },
  logoText: {
    color: '#000075',
    fontSize: '2.5em',
  },
  navList: {},
  navItems: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000075',
    fontSize: '1.2em',
  },
  mobileMenuIcon: {
    display: 'none',
  },
  menuBtn: {
    backgroundColor: '#c0c0f2',
    color: '#001870',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  mobileMenu: {
    display: 'none',
  },
  intro: {
    padding: '40px',
    backgroundColor: '#d4d4ea',
  },
  container: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#c0c0f2',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  profilePic: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  },
  introText: {
    marginLeft: '20px',
  },
  about: {
    marginTop: '20px',
    padding: '20px',
  },
  contact: {
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#001870',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: '#001870',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
};

export default App;
