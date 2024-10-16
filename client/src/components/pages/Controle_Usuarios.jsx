import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Controle = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  const fetchUsuarios = async () => {
    try {
      const resposta = await fetch('http://localhost:3001/usuarios');
      const data = await resposta.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
        method: 'DELETE'
      });

      if (!resposta.ok) {
        console.log('Erro ao deletar usuário');
      } else {
        alert('Usuário deletado com sucesso');
        fetchUsuarios(); // Atualiza a lista após a exclusão
      }
    } catch (error) {
      console.error('Erro ao deletar usuário', error);
    }
  };

  const handleEdit = (usuario) => {
    // Armazena os dados do usuário no localStorage e navega para a tela de cadastro
    localStorage.setItem('usuarioParaEditar', JSON.stringify(usuario));
    navigate('/Cadastro');
  };

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>ViverBem+</h1>
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <Link to="/Bem_vindo" className="nav-link">Página inicial</Link>
              </li>
              <li className="nav-item">
                <Link to="/Cadastro" className="nav-link">Cadastrar</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <h2>Usuários Cadastrados</h2>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nome} - {usuario.email}
              <button onClick={() => handleEdit(usuario)}>Editar</button>
              <button onClick={() => handleDelete(usuario.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </main>

      <footer className="endereco">
        <p>
          ViverBem+<br />
          Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES
        </p>
      </footer>
    </div>
  );
};

export default Controle;
