import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login_Gestao.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);  // Novo estado para sucesso

  // Função para tratar o login
  const handleLogin = async () => {
    try {
      // Fazendo a requisição ao json-server para verificar os administradores
      const responseAdmin = await fetch('http://localhost:5000/administradores');
      const dataAdmin = await responseAdmin.json();

      // Verifica se a matrícula e senha correspondem ao administrador
      const admin = dataAdmin.find(admin => admin.matricula === matricula && admin.senha === senha);

      if (admin) {
        // Se for um administrador válido, mostra a mensagem de sucesso e redireciona
        setLoginSuccess(true);  // Setando o estado de sucesso
        setTimeout(() => {
          navigate('/Bem_vindo');  // Redireciona após um tempo (para ver a mensagem)
        }, 1000);  // Atraso de 1 segundo para exibir a mensagem
      } else {
        // Se as credenciais não forem encontradas
        setError('Matrícula ou senha inválidos');
        setLoginSuccess(false);  // Se falhar no login, resetamos o sucesso
      }
    } catch (error) {
      setError('Erro ao tentar fazer login. Tente novamente.');
      console.error('Erro ao fazer login:', error);
      setLoginSuccess(false);  // Se der erro, resetamos o sucesso
    }
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.login_box}>
        <h2>ViveBem+</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.input_group}>
            <label>Matrícula*</label>
            <input
              type="text"
              placeholder="Digite sua matrícula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </div>
          <div className={styles.input_group}>
            <label>Senha*</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {/* Exibe mensagem de erro, caso exista */}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Exibe a mensagem de sucesso, caso o login seja efetuado com sucesso */}
          {loginSuccess && <p style={{ color: 'green' }}>Login efetuado com sucesso!</p>}

          <button type="button" onClick={handleLogin}>ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
