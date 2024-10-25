import React from 'react';
import profileCarlos from '../pages/imagens/carlosmendes.jpg';
import profileLaura from '../pages/imagens/laura.webp';
import profileGabriel from '../pages/imagens/gabriel.webp';
import profileBenjamin from '../pages/imagens/benjamin.webp';
import profileLuisa from '../pages/imagens/luisa.webp';
import profileMaite from '../pages/imagens/maite.webp';


const Profissionais = () => {
    const menuShow = () => {

    };

    return (
        <div>
            <style>
                {`
          * {
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }

          body {
            height: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(230, 230, 250);
            font-family: "Oswald", sans-serif;
          }

          .roxo {
            background-color: rgb(230, 230, 250);
            height: 50px;
            color: rgb(52, 3, 151);
          }

          #titulo_um {
            margin-top: 50px;
            text-align: left;
            color: rgb(52, 3, 151);
            font-weight: bold;
            font-size: 30px;
          }

          #menu {
            margin-top: 50px;
            text-align: right;
            padding: 5px;
            margin-top: -40px;
          }

          #menu a {
            text-decoration: none;
            color: rgb(52, 3, 151);
            margin-right: 30px;
          }

          #rodape {
            text-align: center;
            color: rgb(52, 3, 151);
            font-weight: bold;
            font-size: 25px;
            margin-top: 80px;
          }

          #controd {
            font-size: 15px;
            text-align: center;
            margin-bottom: 20px;
          }

          #profissionais {
            text-align: center;
            margin-top: 100px;
            text-decoration: underline;
            letter-spacing: 2px;
          }

          #conteupro {
            font-size: 15px;
            margin-bottom: 50px;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            padding: 30px;
          }

          .grid-item {
            text-align: center;
            font-size: 12px;
          }

          .grid-item img {
            max-width: 100%;
            height: 300px;
            object-fit: cover;
          }

          #mapa {
            text-align: center;
            font-size: 25px;
            margin-bottom: 50px;
          }

          #map {
            height: 400px;
            width: 100%;
            text-align: center;
          }

          .nav-bar {
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 6rem;
          }

          .logo {
            display: flex;
            align-items: center;
          }

          .logo h1 {
            color: #23008D;
          }

          .nav-list {
            display: flex;
            align-items: center;
          }

          .nav-list ul {
            display: flex;
            justify-content: center;
            list-style: none;
          }

          .nav-item {
            margin: 0 15px;
          }

          .nav-link {
            text-decoration: none;
            font-size: 1.15rem;
            color: #23008D;
            font-weight: 400;
          }

          .mobile-menu-icon {
            display: none;
          }

          @media screen and (max-width: 730px) {
            .nav-bar {
              padding: 1.5rem 4rem;
            }

            .nav-item {
              display: none;
            }

            .mobile-menu-icon {
              display: block;
              color: #23008D;
            }
          }
        `}
            </style>

            <nav className="nav-bar">
                <div className="logo">
                    <h1>ViverBem+</h1>
                </div>
                <div className="nav-list">
                    <ul>
                        <li className="nav-item"><a href="pagina_inicial.html" className="nav-link">Página inicial</a></li>
                        <li className="nav-item"><a href="login.html" className="nav-link">Login</a></li>
                    </ul>
                </div>
                <div className="mobile-menu-icon">
                    <button onClick={menuShow}>
                        <img className="icon" src="assets/img/menu_white_36dp.svg" alt="" />
                    </button>
                </div>
            </nav>

            <div id="conteudo" className="roxo">
                <div id="profissionais">
                    <h1>Profissionais</h1>
                </div>
                <div className="grid-container">
                    {[
                        { nome: 'Carlos Mendes', experiencia: '3 anos', ciade: 'Vitória - ES', img: profileCarlos },
                        { nome: 'Laura Castro', experiencia: '1 ano e 2 meses', cidade: 'Serra - ES', img: profileLaura },
                        { nome: 'Gabriel Lopes', experiencia: '2 anos e 4 meses', cidade: 'Cariacica - ES', img: profileGabriel },
                        { nome: 'Benjamin Duarte', experiencia: '6 meses', cidade: 'Colatina - ES', img: profileBenjamin },
                        { nome: 'Luísa Heringer', experiencia: '3 anos e 6 meses', cidade: 'Vila Velha - ES', img: profileLuisa, link: 'perfil_profissional.html' },
                        { nome: 'Maitê Vieira', experiencia: '9 meses', cidade: 'Domingos Martins - ES', img: profileMaite },
                    ].map((profissional, index) => (
                        <div className="grid-item" key={index}>
                            <img src={profissional.img} alt={`Descrição da imagem de ${profissional.nome}`} />
                            <h1>{profissional.nome}</h1>
                            <div id="conteupro">
                                <p>Tempo de experiência: {profissional.experiencia}</p>
                                <p>Cidade: {profissional.cidade}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 id="mapa">Procure o profissional mais próximo de você:</h1>
                <iframe
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.960643529147!2d-40.29228472391891!3d-20.343244479370224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83e1c440daee3%3A0xa0951792ea0f3017!2sCentro%20Empresarial%20Praia%20da%20Costa%20Offices!5e0!3m2!1spt-BR!2sbr!4v1727112829741!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <h1 id="rodape">ViverBem+</h1>
                <p id="controd">Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
            </div>
        </div>
    );
};

export default Profissionais;
