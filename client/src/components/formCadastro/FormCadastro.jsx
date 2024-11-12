import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../layout/navBar';
import styles from './Formcadastro.module.css';




function FormCadastro({ titulo, handleSubmit, id, teste }) {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [formCadastro, setFormCadastro] = useState({
        nome: '',
        telefone: '',
        email: '',
        cpf: '',
        data_nascimento: '',
        senha: '',
        confirmar_senha: '',
        cidade: '',
        tipo_usuario: ''
    });

    useEffect(() => {

        if (id) {
            buscarCadastro(id);
        }
    }, [id]);

    async function buscarCadastro(id) {
        try {
            const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!resposta.ok) {
                throw new Error('Erro ao buscar usuário');
            } else {
                const respostaJSON = await resposta.json();
                setFormCadastro(respostaJSON);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormCadastro({
            ...formCadastro,
            [name]: value
        });
    }

    function submit(e) {
        e.preventDefault();

        handleSubmit(formCadastro, id);
    }

    function handleEdit(usuario) {
        setFormCadastro(usuario);
    }

    async function handleDelete(id) {
        try {
            await fetch(`http://localhost:3001/usuarios/${id}`, {
                method: 'DELETE',
            });
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch (error) {
            console.log('Erro ao deletar usuário:', error);
        }
    }

    console.log(formCadastro)

    return (
        <div>
            <NavBar />
            <div className={styles.login_section}>

                <main>
                    <section >

                        <div className={styles.form_container}>
                            <h1>{titulo}</h1>
                            <h2><b>{formCadastro.id ? 'Editar Usuário' : 'Cadastre-se'}</b></h2>
                            <form onSubmit={submit}>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome Completo *"
                                    value={formCadastro.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="telefone"
                                    placeholder="Telefone *"
                                    value={formCadastro.telefone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formCadastro.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="CPF *"
                                    value={formCadastro.cpf}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="date"
                                    name="data_nascimento"
                                    value={formCadastro.data_nascimento}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Crie uma senha *"
                                    value={formCadastro.senha}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="confirmar_senha"
                                    placeholder="Confirme sua senha *"
                                    value={formCadastro.confirmar_senha}
                                    onChange={handleChange}
                                    required
                                />

                                <select className={styles.sec}
                                    name="cidade"
                                    value={formCadastro.cidade}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione sua cidade:</option>
                                    <option value="cariacica">Cariacica</option>
                                    <option value="fundao">Fundão</option>
                                    <option value="guarapari">Guarapari</option>
                                    <option value="serra">Serra</option>
                                    <option value="viana">Viana</option>
                                    <option value="vila velha">Vila Velha</option>
                                    <option value="vitoria">Vitória</option>
                                </select>

                                <select className={styles.sec}
                                    name="tipo_usuario"
                                    value={formCadastro.tipo_usuario}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione uma opção:</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="profissional">Profissional</option>
                                </select>

                                <button type="submit" className={styles.link}>
                                    {formCadastro.id ? 'Salvar' : 'Cadastre-se'}
                                </button>
                            </form>
                        </div>
                    </section>

                    <section className="user-list">

                        <ul>
                            {usuarios.map((usuario) => (
                                <li key={usuario.id}>
                                    {usuario.nome} - {usuario.email}
                                    <button onClick={() => handleEdit(usuario)}>Editar</button>
                                    <button onClick={() => handleDelete(usuario.id)}>Excluir</button>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>


            </div>
        </div>
    );
}

export default FormCadastro;
