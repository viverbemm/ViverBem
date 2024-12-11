import profileCarlos from '../pages/imagens/carlosmendes.jpg';
import profileBenjamin from '../pages/imagens/benjamin.webp';
import profileGabriel from '../pages/imagens/gabriel.webp';
import profileLaura from '../pages/imagens/laura.webp';
import profileLuisa from '../pages/imagens/luisa.webp';
import profileMaite from '../pages/imagens/maite.webp';
import stylesT from './Tela_profissionais.module.css';
import NavInferior from '../layout/navInferior';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../layout/navBar';

function Profissionais() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProfissionais, setFilteredProfissionais] = useState([]);

  const profissionais = [
    { nome: 'Carlos Mendes', experiencia: '3 anos', cidade: 'Vitória - ES', diaria: 'R$ 179,90', img: profileCarlos },
    { nome: 'Laura Castro', experiencia: '1 ano e 2 meses', cidade: 'Serra - ES', diaria: 'R$ 210,90', img: profileLaura },
    { nome: 'Gabriel Lopes', experiencia: '2 anos e 4 meses', cidade: 'Cariacica - ES', diaria: 'R$ 148,80', img: profileGabriel },
    { nome: 'Benjamin Duarte', experiencia: '6 meses', cidade: 'Colatina - ES', diaria: 'R$ 190,45', img: profileBenjamin },
    { nome: 'Luísa Heringer', experiencia: '3 anos e 6 meses', cidade: 'Vila Velha - ES', diaria: 'R$ 210,00', img: profileLuisa },
    { nome: 'Maitê Vieira', experiencia: '9 meses', cidade: 'Fundão - ES', diaria: 'R$ 169,50', img: profileMaite },
  ];


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    if (query) {
      const filtered = profissionais.filter(p =>
        p.nome.toLowerCase().includes(query)
      );
      setFilteredProfissionais(filtered);
    } else {
      setFilteredProfissionais(profissionais);
    }
  };

  return (
    <div style={{ backgroundColor: '#c2c2f8', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div className={stylesT.roxo}>
        <div className={stylesT.profissionais}>
          <input
            type="text"
            placeholder="Buscar profissional..."
            value={search}
            onChange={handleSearch}
            className={stylesT.busca}
          />
          <h1><b>Profissionais</b></h1>
        </div>
        <section className={stylesT.grid_container}>
          {(filteredProfissionais.length > 0 ? filteredProfissionais : profissionais).map((profissional, index) => (
            <div className={stylesT.grid_item} key={index}>
              <Link to={`/perfil_profissional/${profissional.nome.toLowerCase().replace(/ /g, '-')}`}>
                <img src={profissional.img} alt={`Descrição da imagem de ${profissional.nome}`} />
              </Link>
              <h1>
                <Link
                  to={`/perfil_profissional/${profissional.nome.toLowerCase().replace(/ /g, '-')}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {profissional.nome}
                </Link>
              </h1>
              <div className={stylesT.conteupro}>
                <p>Tempo de experiência: {profissional.experiencia}</p>
                <p style={{ marginTop: '-20px' }}>Cidade: {profissional.cidade}</p>
                <p style={{ marginTop: '-20px' }}>Diária: {profissional.diaria}</p>
              </div>
            </div>
          ))}
        </section>

        <h1 className={stylesT.mapa}><b>Procure o profissional mais próximo de você:</b></h1>
        <iframe
          className={stylesT.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.960643529147!2d-40.29228472391891!3d-20.343244479370224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83e1c440daee3%3A0xa0951792ea0f3017!2sCentro%20Empresarial%20Praia%20da%20Costa%20Offices!5e0!3m2!1spt-BR!2sbr!4v1727112829741!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <NavInferior />
      </div>
    </div>
  );
}

export default Profissionais;
