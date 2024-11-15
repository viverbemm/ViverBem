import React, { useState } from 'react';
import styles from './LoginUsuario.module.css';
import NavBar from '../layout/navBar';
import NavInferior from '../layout/navInferior';
import { useNavigate } from 'react-router-dom';

function LoginUsuario() {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);

    // Função para validar CPF
    const isValidCPF = (cpf) => {
        const cleanCPF = cpf.replace(/\D/g, ''); // Remove qualquer caractere não numérico
        if (cleanCPF.length !== 11) return false; // O CPF precisa ter 11 números
        // Aqui você pode adicionar uma validação mais rigorosa de CPF, como o algoritmo de verificação.
        return true;
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

        try {
            // Busca pelo usuário com o CPF e senha informados
            const response = await fetch(`http://localhost:3001/usuarios?cpf=${cpf}&senha=${senha}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            // Se encontrar o usuário, o login é bem-sucedido
            if (data.length > 0) {
                navigate('/pagamento');  // Redireciona para a página de pagamento
            } else {
                setError('CPF ou senha incorretos');
            }
        } catch (error) {
            setError('Erro ao realizar login');
        }
    };

    // Validação e formatação para permitir apenas números no CPF e adicionar os pontos e traço
    const handleCpfChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
        let formattedCPF = input;

        // Adiciona os pontos e traço conforme a quantidade de dígitos
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
        <div className={styles.pageee}>
            <NavBar />

            <main className={styles.pagina}>
                <section className={styles.LoginUsuario}>
                    <div className={styles.caixa}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h2>Login</h2>
                            <input
                                className={styles.cpf}
                                type="text"
                                name="cpf"
                                placeholder="CPF:"
                                value={cpf}
                                onChange={handleCpfChange} // Usa a função handleCpfChange para validar e formatar a entrada
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
                            <a href="/Cadastro" className={styles.registerCadastro}><b>Esqueci senha</b></a>
                            <button
                                className={styles.botao}
                                type="button"
                                onClick={handleLogin}
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <NavInferior />
        </div>
    );
}

export default LoginUsuario;
