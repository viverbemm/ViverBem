import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [usuario, setUsuario] = useState({ nome: '', email: '' });
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  // Verifica se há um usuário para editar no localStorage
  useEffect(() => {
    const usuarioParaEditar = localStorage.getItem('usuarioParaEditar');
    if (usuarioParaEditar) {
      setUsuario(JSON.parse(usuarioParaEditar));
      setIsEdit(true);
    }
  }, []);

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  // Função para salvar ou atualizar o usuário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEdit ? 'PUT' : 'POST';
    const url = isEdit
      ? `http://localhost:3001/usuarios/${usuario.id}`
      : 'http://localhost:3001/usuarios';

    try {
      const resposta = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao salvar usuário');
      }

      alert(`Usuário ${isEdit ? 'atualizado' : 'cadastrado'} com sucesso`);
      localStorage.removeItem('usuarioParaEditar'); // Limpa o localStorage após o uso
      navigate('/Controle'); // Navega para a tela de controle
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
      alert('Ocorreu um erro ao salvar o usuário');
    }
  };

  return (
    <div>
      <header>
        <h1>{isEdit ? 'Editar Usuário' : 'Cadastrar Usuário'}</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={usuario.nome}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">{isEdit ? 'Atualizar' : 'Cadastrar'}</button>
        <button type="button" onClick={() => navigate('/Controle')}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
