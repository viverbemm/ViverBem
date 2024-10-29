import React, { useState } from 'react';
import profileMenu from './assets/img/menu_white_36dp.svg';
import profilePic from '../pages/imagens/luisa.webp';
import stylesA from './Tela.Agendamentos.module.css';
import stylesM from './Menu_superior.module.css';

function Agendamentos() {
  const [checkinDate, setCheckinDate] = useState('05/08/2024');
  const [checkoutDate, setCheckoutDate] = useState('09/08/2024');
  const dailyRate = 150;
  const serviceFee = 156;
  const days = 5;
  const total = dailyRate * days + serviceFee;

  const [menuOpen, setMenuOpen] = useState(false);

  const menuShow = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: '#E6E6FA', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className={stylesA.container}>
        <header className={stylesA.header}>
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

        <main className={stylesA.main}>
          <section className={stylesA.profileSection}>
            <img
              src={profilePic}
              alt="Luísa Heringer"
              className={stylesA.profileImage}
            />
            <div className={stylesA.services}>
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

          <section className={stylesA.bookingSection}>
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
              <button className={stylesA.reserveButton}>Reservar</button>
            </div>
          </section>

          <section className={stylesA.contactSection}>
            <h3>Contato</h3>
            <p><a href="mailto:luisaheringer@gmail.com">luisaheringer@gmail.com</a></p>
            <p><a href="tel:+5527999992121">(27) 99999-2121</a></p>
            <p>Estou sempre em busca de novas oportunidades. Entre em contato.</p>
          </section>
        </main>
        <h1 className={stylesA.rodape}>ViverBem+</h1>
        <p className={stylesA.controd}>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
      </div>
    </div >
  );
};

export default Agendamentos;
