import profileCarlos from '../pages/imagens/carlosmendes.jpg';
import profileBenjamin from '../pages/imagens/benjamin.webp';
import profileGabriel from '../pages/imagens/gabriel.webp';
import profileLaura from '../pages/imagens/laura.webp';
import profileLuisa from '../pages/imagens/luisa.webp';
import profileMaite from '../pages/imagens/maite.webp';
import stylesT from './Tela_profissionais.module.css';
import React, { useState, useEffect } from 'react';
import NavInferior from '../layout/navInferior';
import { Link } from 'react-router-dom';
import NavBar from '../layout/navBar';

function TelaProfissionais() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProfissionais, setFilteredProfissionais] = useState([]);

  const profissionais = [
    { id: 1, nome: 'Carlos Mendes', experiencia: '3 anos', cidade: 'Vitória - ES', diaria: 'R$ 179,90', img: profileCarlos, slug: 'carlos-mendes' },
    { id: 2, nome: 'Laura Castro', experiencia: '1 ano e 2 meses', cidade: 'Serra - ES', diaria: 'R$ 210,90', img: profileLaura, slug: 'laura-castro' },
    { id: 3, nome: 'Gabriel Lopes', experiencia: '2 anos e 4 meses', cidade: 'Cariacica - ES', diaria: 'R$ 148,80', img: profileGabriel, slug: 'gabriel-lopes' },
    { id: 4, nome: 'Benjamin Duarte', experiencia: '6 meses', cidade: 'Colatina - ES', diaria: 'R$ 190,45', img: profileBenjamin, slug: 'benjamin-duarte' },
    { id: 5, nome: 'Maitê Vieira', experiencia: '9 meses', cidade: 'Fundão - ES', diaria: 'R$ 169,50', img: profileMaite, slug: 'maite-vieira' },
    { id: 6, nome: 'Luísa Heringer', experiencia: '3 anos e 6 meses', cidade: 'Vila-Velha - ES', diaria: 'R$ 210,00', img: profileLuisa, slug: 'luisa-heringer' },
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query) {
      const filtered = profissionais.filter(p =>
        p.nome.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProfissionais(filtered);
    } else {
      setFilteredProfissionais(profissionais);
    }
  };

  useEffect(() => {
    setFilteredProfissionais(profissionais);
  }, []);

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
          {filteredProfissionais.length > 0 ? (
            filteredProfissionais.map((profissional) => (
              <div className={stylesT.grid_item} key={profissional.id}>
                <Link to={`/profissional/${profissional.slug}`}>
                  <img src={profissional.img} alt={`Imagem de ${profissional.nome}`} />
                </Link>
                <h1>
                  <Link
                    to={`/profissional/${profissional.slug}`}
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
            ))
          ) : (
            <p>Nenhum profissional encontrado.</p>
          )}
        </section>
        <p>ﾠ</p>
        <p>ﾠ</p>
        <NavInferior />
      </div>
    </div>
  );
}

export default TelaProfissionais;
