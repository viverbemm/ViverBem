import { useState, useEffect } from 'react';
import styles from './MinhaConta.module.css';
import NavConfig from '../layout/navConfig';
import { useNavigate } from 'react-router-dom';
import NavInferior from '../layout/navInferior';

const EditProfile = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validações de senha
        if (senha !== confirmSenha) {
            setError('As senhas não coincidem');
            return;
        }

        setError('');

        // Montando os dados do formulário
        const formData = new FormData();
        formData.append('nomeCompleto', nomeCompleto);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('dataNascimento', dataNascimento);
        formData.append('genero', genero);
        formData.append('senha', senha);
        if (fotoPerfil) {
            formData.append('fotoPerfil', fotoPerfil);
        }

        try {
            const response = await fetch('http://localhost:3001/updateProfile', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSuccess('Dados atualizados com sucesso!');
            } else {
                setError('Erro ao atualizar os dados.');
            }
        } catch (error) {
            setError('Erro ao conectar com o servidor.');
            console.error(error);
        }
    };

    const handleFileChange = (e) => {
        setFotoPerfil(e.target.files[0]);
    };

    return (

        <div className={styles.page}>
            <NavConfig />

            <div className={styles.editProfileContainer}>

                <h2>Editar Perfil</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Nome Completo</label>
                        <input
                            type="text"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Telefone</label>
                        <input
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Data de Nascimento</label>
                        <input
                            type="date"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Gênero</label>
                        <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Foto de Perfil</label>
                        <input type="file" onChange={handleFileChange} />
                        {fotoPerfil && <p>Arquivo selecionado: {fotoPerfil.name}</p>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Confirmar Senha</label>
                        <input
                            type="password"
                            value={confirmSenha}
                            onChange={(e) => setConfirmSenha(e.target.value)}
                            required
                        />

                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                    <button type="submit" className={styles.submitButton}>Salvar Alterações</button>
                </form>
            </div>
            <NavInferior />
        </div>
    );
};

export default EditProfile;