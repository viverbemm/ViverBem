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
                    <button className={styles.botD} onClick={() => handleDelete(usuario.id)}><h2>Excluir</h2></button>
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
