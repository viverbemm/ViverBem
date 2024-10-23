import React from 'react';
import './Tela_profissionais.css'; // ajuste o caminho conforme necessário
import './assets/css/estilo.css';
import menuIcon from './assets/img/menu_white_36dp.svg'; // ajuste o caminho conforme necessário

const Profissionais = () => {
    const menuShow = () => {
        // lógica para mostrar/esconder o menu em dispositivos móveis
    };

    return (
        <div>
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
                        <img className="icon" src={menuIcon} alt="Menu" />
                    </button>
                </div>
            </nav>

            <div id="conteudo" className="roxo">
                <div id="profissionais">
                    <h1>Profissionais</h1>
                </div>
                <div className="grid-container">
                    {[
                        { name: 'Carlos Mendes', experience: '3 anos', city: 'Vitória - ES', img: 'img/carlosmendes.jpg' },
                        { name: 'Laura Castro', experience: '1 ano e 2 meses', city: 'Serra - ES', img: 'img/lauracastro.jpg' },
                        { name: 'Gabriel Lopes', experience: '2 anos e 4 meses', city: 'Cariacica - ES', img: 'img/gabriellopes.jpg' },
                        { name: 'Benjamin Duarte', experience: '6 meses', city: 'Colatina - ES', img: 'img/benjaninduarte.jpg' },
                        { name: 'Luísa Heringer', experience: '3 anos e 6 meses', city: 'Vila Velha - ES', img: 'img/luisahenringer.jpg', link: 'perfil_profissional.html' },
                        { name: 'Maitê Vieira', experience: '9 meses', city: 'Domingos Martins - ES', img: 'img/maitevieira.jpg' },
                    ].map((profissional, index) => (
                        <div key={index} className="grid-item">
                            {profissional.link ? (
                                <a href={profissional.link}>
                                    <img src={profissional.img} alt={`Descrição da imagem de ${profissional.name}`} />
                                </a>
                            ) : (
                                <img src={profissional.img} alt={`Descrição da imagem de ${profissional.name}`} />
                            )}
                            <h1>{profissional.name}</h1>
                            <div id="conteupro">
                                <p>Tempo de experiência: {profissional.experience}</p>
                                <p>Cidade: {profissional.city}</p>
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
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h1 id="rodape">ViverBem+</h1>
                <p id="controd">Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
                <p>ㅤ</p>
                <p>ㅤ</p>
            </div>
        </div>
    );
};

export default Profissionais;
