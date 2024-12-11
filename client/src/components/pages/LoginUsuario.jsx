import React, { useState } from 'react';
import styles from './LoginUsuario.module.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';
import { useNavigate } from 'react-router-dom';
import VelhoMulher from '../pages/imagens/velho-mulher.webp';

function LoginUsuario() {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);

    // Função para validar CPF
    const isValidCPF = (cpf) => {
        const cleanCPF = cpf.replace(/\D/g, '');
        return cleanCPF.length === 11; // Verifica se o CPF tem 11 dígitos
    };

    // Função para autenticar o usuário
    const handleLogin = async () => {
        if (!isValidCPF(cpf)) {
            setError('CPF inválido');
            return;
        }

        if (senha.length < 6) {
            setError('A senha precisa ter no mínimo 6 caracteres');
            return;
        }
        const dadosLogin = {
            cpf,
            senha
        };
        try {
            const response = await fetch(`http://localhost:5000/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(dadosLogin) 
            });

            if(response.ok){
                
                const {id_usuario} = await response.json();
                console.log(id_usuario);
                localStorage.setItem("id_usuario",id_usuario);
                navigate('/perfil'); // Redireciona para a página de perfil
            }else {
                setError('CPF ou senha incorretos');
            }
        } catch (error) {
            setError('Erro ao realizar login');
        }
    };

    // Função para formatar CPF
    const handleCpfChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        let formattedCPF = input;

        if (formattedCPF.length > 3 && formattedCPF.length <= 6) {
            formattedCPF = `${formattedCPF.slice(0, 3)}.${formattedCPF.slice(3)}`;
        } else if (formattedCPF.length > 6 && formattedCPF.length <= 9) {
            formattedCPF = `${formattedCPF.slice(0, 3)}.${formattedCPF.slice(3, 6)}.${formattedCPF.slice(6)}`;
        } else if (formattedCPF.length > 9) {
            formattedCPF = `${formattedCPF.slice(0, 3)}.${formattedCPF.slice(3, 6)}.${formattedCPF.slice(6, 9)}-${formattedCPF.slice(9, 11)}`;
        }

        setCpf(formattedCPF);
    };

    return (
        <div className={styles.pagina}>
            <NavBar />
            <div className={styles.imgvm}>
                <img src={VelhoMulher} alt="VelhoMulher" />
            </div>
            <div className={styles.caixa}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Login</h2>
                    <input
                        className={styles.cpf}
                        type="text"
                        name="cpf"
                        placeholder="CPF:"
                        value={cpf}
                        onChange={handleCpfChange}
                        required
                    />
                    <input
                        className={styles.senha}
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha:"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <a 
                        onClick={() => navigate('/AlterarSenha')} 
                        className={styles.registerCadastro}
                    >
                        <b>Esqueci senha</b>
                    </a>
                    <button
                        className={styles.botao}
                        type="button"
                        onClick={handleLogin}
                    >                        Entrar
                    </button>
                </form>
            </div>
            <NavInferior />
        </div>
    );
}

export default LoginUsuario;
