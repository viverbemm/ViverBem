import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavGestao from '../layout/navGestao';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Controle_usuarios.module.css';

const Controle = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Função para buscar os usuários
  const fetchUsuarios = async () => {
    try {
      const resposta = await fetch('http://localhost:5000/usuario');
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

  // Função para "deletar" um usuário apenas da tela
const handleDelete = (id) => {
  if (!window.confirm('Tem certeza que deseja excluir este usuário?')) {
    return;
  }

  // Atualiza a lista de usuários localmente
  const usuariosAtualizados = usuarios.filter((usuario) => usuario.id !== id);
  setUsuarios(usuariosAtualizados);

  // Salva os IDs dos usuários excluídos no localStorage
  const excluidos = JSON.parse(localStorage.getItem('usuariosExcluidos')) || [];
  excluidos.push(id);
  localStorage.setItem('usuariosExcluidos', JSON.stringify(excluidos));

  alert('Usuário removido com sucesso');
};

// Chamada do fetch ao montar o componente
useEffect(() => {
  const fetchUsuarios = async () => {
    try {
      const resposta = await fetch('http://localhost:5000/usuario');
      if (!resposta.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      const data = await resposta.json();

      // Recupera IDs dos usuários excluídos do localStorage
      const excluidos = JSON.parse(localStorage.getItem('usuariosExcluidos')) || [];

      // Filtra os usuários excluídos
      const usuariosFiltrados = data.filter((usuario) => !excluidos.includes(usuario.id));
      setUsuarios(usuariosFiltrados);
    } catch (error) {
      setError(error.message);
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchUsuarios();
}, []);
  // Função para editar um usuário
  const handleEdit = (usuario) => {
    localStorage.setItem('usuarioParaEditar', JSON.stringify(usuario));
    navigate(`/EditCadastro/${usuario.id}`);
  };

  return (
    <div className={styles.pagee}>
      <NavGestao />

      <main>
        <div className={styles.font}>
          <h2>Usuários Cadastrados</h2>
        </div>
        {loading && <p>Carregando usuários...</p>}
        {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

        {!loading && !error && usuarios.length > 0 ? (
          <table className="table">
            <thead>
              <tr className={styles.tab}>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className={styles.tabb}>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <button className={styles.bot} onClick={() => handleEdit(usuario)}><h1>Editar</h1></button>
                    <button className={styles.bot} onClick={() => handleDelete(usuario.id)}><h1>Excluir</h1></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && !error && <p>Nenhum usuário encontrado.</p>
        )}
      </main>
    </div>
  );
};

export default Controle;
