import React, { useState, useEffect } from 'react';
import profilePic from '../pages/imagens/luisa.webp';
import visa from '../pages/imagens/Former_Visa__company__logo.png';
import master from '../pages/imagens/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png';
import elo from '../pages/imagens/elo.png';
import hipercard from '../pages/imagens/Hipercard_logo.svg.png';
import hiper from '../pages/imagens/Hiper-logotipo.jpg';
import american from '../pages/imagens/png-transparent-logo-american-express-payment-computer-icons-brand-american-express-blue-text-rectangle-thumbnail.png';
import pix from '../pages/imagens/pix-106.png';
import boleto from '../pages/imagens/Imagem-Boleto-Bancário-PNG.png';
import stylesA from './Tela.agendamentos.module.css';
import email from '../pages/imagens/email.png';
import telephone from '../pages/imagens/telephone-handle-silhouette.png';
import NavBar from '../layout/navBar';

function Agendamentos() {

  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [days, setDays] = useState(0);
  const dailyRate = 150;
  const serviceFee = 156;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (checkinDate && checkoutDate) {
      const checkin = new Date(checkinDate);
      const checkout = new Date(checkoutDate);
      const timeDiff = checkout - checkin;
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      setDays(dayDiff);

      const totalAmount = dailyRate * dayDiff + serviceFee;
      setTotal(totalAmount);
    }
  }, [checkinDate, checkoutDate]);

  return (
    <div style={{ backgroundColor: '#BBADDF', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <section className={stylesA.intro}>
        <div className={stylesA.containerI}>
          <img src={profilePic} alt="Luísa Heringer" className={stylesA.profilePic} />
          <div className={stylesA.introText}>
            <h2 style={{
              color: '#23008D',
              fontSize: '30px',
              marginBottom: '20px'
            }}>Luísa Heringer.</h2>
            <h2 style={{
              color: '#23008D',
              fontSize: '30px',
              marginBottom: '20px'
            }}>Serviços Oferecidos</h2>
            <ul style={{
              marginLeft: '5%',
              fontSize: '18px',
              fontWeight: '100',
              color: '#23008D',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              textAlign: 'left',
            }}>
              <p>ﾠ</p>
              <li>Assistência diária</li>
              <li>Gerenciamento de sintomas</li>
              <li>Estimulação cognitiva</li>
              <li>Fisioterapia e exercícios</li>
              <li>Suporte emocional</li>
              <li>Coordenação com profissionais de saúde</li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ display: 'flex', gap: '3%' }}>
        <section className={stylesA.reserva}>
          <h1 style={{ fontSize: '30px', color: '#23008D', textAlign: 'center' }}>Informações da Reserva</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <h3>Check-in</h3>
              <input
                type="date"
                value={checkinDate}
                onChange={(e) => setCheckinDate(e.target.value)}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3>Checkout</h3>
              <input
                type="date"
                value={checkoutDate}
                onChange={(e) => setCheckoutDate(e.target.value)}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
          </div>

          <div>
            <p style={{ marginTop: '40px', fontWeight: '100' }}>R$ {dailyRate} x {days} DIÁRIAS</p>
            <p style={{ marginTop: '0', fontWeight: '100' }}>Taxa de serviço do ViverBem+</p>
            <p style={{ textAlign: 'right', marginTop: '-85px', fontWeight: '100' }}>R$ {dailyRate * days},00</p>
            <p style={{ textAlign: 'right', marginBottom: '0', fontWeight: '100' }}>R$ {serviceFee},00</p>
            <h3 style={{ textAlign: 'center' }}>Total: R$ {total},00</h3>
          </div>

          <h1 style={{
            color: '#23008D',
            fontSize: '18px',
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center',
          }}>Após a confirmação do pagamento, você será</h1>
          <h1 style={{
            color: '#23008D',
            fontSize: '18px',
            textAlign: 'center',
            marginTop: '-15px',
          }}>direcionado automaticamente à tela do profissional.</h1>
        </section>

        <section className={stylesA.pagamento}>
          <h1 style={{ fontSize: '30px', color: '#23008D', textAlign: 'center', marginLeft: '10%', marginBottom: '20%', marginTop: '20px' }}>
            Cartão de crédito em até 12x
            <div className={stylesA.grid_container}>
              {[{ img: visa }, { img: master }, { img: elo }, { img: hipercard }, { img: hiper }, { img: american }].map(
                (pagamento, index) => (
                  <div className={stylesA.grid_item} key={index}>
                    <img src={pagamento.img} alt={`Pagamento ${index + 1}`} className={stylesA.pagamento_imagem} />
                  </div>
                )
              )}
            </div>
            <h1 style={{ fontSize: '30px' }}>Pix ou boleto</h1>
            <div className={stylesA.grid_containerr}>
              {[{ img: pix }, { img: boleto }].map(
                (pagamento, index) => (
                  <div className={stylesA.grid_itemm} key={index}>
                    <img src={pagamento.img} alt={`Pag ${index + 1}`} className={stylesA.pagamento_imagem} />
                  </div>
                )
              )}
              <a href="#" className={stylesA.button}>Pagar</a>
            </div>
          </h1>
        </section>
      </section>

      <section className={stylesA.cont}>
        <div className={stylesA.containerIII}>
          <h1 className={stylesA.ato}>Contato:</h1>
          <p style={{ fontSize: '18px' }}>
            <img src={email} alt="email" className={stylesA.email} />
            <strong style={{
              color: '#23008D',
              marginLeft: '2%',
            }}>Email:</strong> luisaheringer@gmail.com
          </p>
          <p style={{ fontSize: '18px' }}>
            <img src={telephone} alt="telephone" className={stylesA.telephone} />
            <strong style={{
              color: '#23008D',
              marginLeft: '2%',
              fontSize: '18px',
            }}>Telefone:</strong> (27) 99999-2121
          </p>
          <div style={{ marginTop: '-10%' }}>
            <p style={{
              marginLeft: '60%',
              fontSize: '18px',
              marginTop: '3%'
            }}>Estou sempre em busca de novas</p>
            <p style={{
              marginLeft: '60%',
              marginTop: '-15px',
              fontSize: '18px',
            }}>oportunidades. Entre em contato.</p>
          </div>
        </div>
      </section>

      <section className={stylesA.rod}>
        <div className={stylesA.containerIV}>
          <h1 className={stylesA.rodape}>ViverBem+</h1>
          <p style={{ fontWeight: '100' }}>Centro Empresarial Shopping Praia da Costa, 245, Vila Velha - ES.</p>
        </div>
      </section>
    </div >
  );
};

export default Agendamentos;
