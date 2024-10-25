import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavGestao from '../layout/navGestao';

const Controle = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Função para buscar os usuários
  const fetchUsuarios = async () => {
    try {
      const resposta = await fetch('http://localhost:3001/usuarios');
      if (!resposta.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      const data = await resposta.json();
      setUsuarios(data);
    } catch (error) {
      setError(error.message);
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  // Chamada do fetch ao montar o componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Função para deletar um usuário
  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) {
      return;
    }

    try {
      const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
        method: 'DELETE',
      });

      if (!resposta.ok) {
        console.log('Erro ao deletar usuário');
      } else {
        alert('Usuário deletado com sucesso');
        fetchUsuarios(); // Atualiza a lista após a exclusão
      }
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  // Função para editar um usuário
  const handleEdit = (usuario) => {
    localStorage.setItem('usuarioParaEditar', JSON.stringify(usuario));
    navigate(`/EditCadastro/${usuario.id}`);
  };

  return (
    <div>
     <NavGestao />
      <header>
        <h1>Controle de Usuários</h1>
      </header>

      <main>
        <h2>Usuários Cadastrados</h2>

        {loading && <p>Carregando usuários...</p>}
        {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

        {!loading && !error && usuarios.length > 0 ? (
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.id}>
                {usuario.nome} - {usuario.email}
                <button onClick={() => handleEdit(usuario)}>Editar</button>
                <button onClick={() => handleDelete(usuario.id)}>Excluir</button>
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && <p>Nenhum usuário encontrado.</p>
        )}
      </main>

      <footer className="endereco">
        <p>Endereço ou informações de contato aqui.</p>
      </footer>
    </div>
  );
};

export default Controle;
