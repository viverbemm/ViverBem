import React, { useState } from 'react';
import styles from './AlterarSenha.module.css';
import NavBar from './layout/navBar';
import NavInferior from './layout/navInferior';


function AlterarSenha() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    const handleResetPassword = async () => {
        setMessage(null);

        if (!email) {
            setMessage('Por favor, insira um e-mail válido.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/usuario?email=${email}`);
            const data = await response.json();

            if (data.length > 0) {
                setMessage('Um link para redefinir sua senha foi enviado ao seu e-mail.');
                console.log(`Enviar link de redefinição de senha para: ${email}`);
            } else {
                setMessage('E-mail não encontrado.');
            }
        } catch (error) {
            setMessage('Erro ao tentar redefinir a senha. Tente novamente mais tarde.');
        }
    };

    return (
        <div>
         <NavBar/>
        
        <div className={styles.container}>
            <h2><b>Redefinir Senha</b></h2>
            <p>Insira seu e-mail para receber um link de redefinição de senha.</p>
            <input
                className={styles.input}
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            {message && <p className={styles.message}>{message}</p>}
            <button
                className={styles.button}
                onClick={handleResetPassword}
            >
                Enviar
            </button>
        </div>
        </div>
    );
}

export default AlterarSenha;