import React, { useState } from 'react';

const App = () => {
  const [checkinDate, setCheckinDate] = useState('05/08/2024');
  const [checkoutDate, setCheckoutDate] = useState('09/08/2024');
  const dailyRate = 150;
  const serviceFee = 156;
  const days = 5;
  const total = dailyRate * days + serviceFee;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>ViverBem+</h1>
        <nav style={styles.nav}>
          <a href="#">Página inicial</a>
          <a href="#">Login</a>
        </nav>
      </header>
      
      <main style={styles.main}>
        <section style={styles.profileSection}>
          <img 
            src="profile-picture-url.jpg" 
            alt="Luísa Heringer" 
            style={styles.profileImage} 
          />
          <div style={styles.services}>
            <h2>Luísa Heringer</h2>
            <h3>Serviços oferecidos</h3>
            <ul>
              <li>Assistência diária</li>
              <li>Gerenciamento de sintomas</li>
              <li>Estimulação cognitiva</li>
              <li>Fisioterapia e exercícios</li>
              <li>Suporte emocional</li>
              <li>Coordenação com profissionais de saúde</li>
            </ul>
          </div>
        </section>
        
        <section style={styles.bookingSection}>
          <div>
            <h3>Check-in</h3>
            <p>{checkinDate}</p>
            <h3>Checkout</h3>
            <p>{checkoutDate}</p>
          </div>

          <div>
            <p>R$ {dailyRate} x {days} DIÁRIAS</p>
            <p>R$ {dailyRate * days},00</p>
            <p>Taxa de serviço do ViverBem+</p>
            <p>R$ {serviceFee},00</p>
            <h3>Total: R$ {total},00</h3>
            <button style={styles.reserveButton}>Reservar</button>
          </div>
        </section>
        
        <section style={styles.contactSection}>
          <h3>Contato</h3>
          <p><a href="mailto:luisaheringer@gmail.com">luisaheringer@gmail.com</a></p>
          <p><a href="tel:+5527999992121">(27) 99999-2121</a></p>
          <p>Estou sempre em busca de novas oportunidades. Entre em contato.</p>
        </section>
      </main>
      
      <footer style={styles.footer}>
        <p>ViverBem+<br/>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#EAE8FF',
    color: '#333',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#A89CD8',
    padding: '10px',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  profileSection: {
    display: 'flex',
    gap: '20px',
  },
  profileImage: {
    width: '150px',
    borderRadius: '50%',
  },
  services: {
    backgroundColor: '#E0DBF7',
    padding: '10px',
    borderRadius: '10px',
  },
  bookingSection: {
    backgroundColor: '#F0EFFB',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  reserveButton: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  contactSection: {
    backgroundColor: '#E0DBF7',
    padding: '20px',
    borderRadius: '10px',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#A89CD8',
    color: '#fff',
  },
};

export default App;
