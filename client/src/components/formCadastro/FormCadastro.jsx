import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function FormCadastro({ titulo, textoBotao, handleSubmit, id }) {
    const navigate = useNavigate();
    const Cadastro = () => {
        const [usuarios, setUsuarios] = useState([]);
        const [FormCadastro, setFormCadastro] = useState({
            id: null,
            nome: '',
            telefone: '',
            email: '',
            cpf: '',
            matricula: '',
            data_nascimento: '',
            senha: '',
            confirmar_senha: '',
            cidade: '',
            tipo_usuario: ''
        });

        // const [aula, setAula] =useState({});

        useEffect(() => {
            if (id) {


                Cadastro(id)
            }
        }, []);

        async function Cadastro(id) {

            try {
                const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!resposta.ok) {
                    throw new Error('Erro ao buscar usuário');

                } else {
                    const respostaJSON = await resposta.json();
                    console.log(respostaJSON);

                }

            } catch (error) {
                console.log(error)
            }
        }

        function submit(e) {
            e.preventDefault();

            const Cadastro = {
                id: null,
                nome: '',
                telefone: '',
                email: '',
                cpf: '',
                matricula: '',
                data_nascimento: '',
                senha: '',
                confirmar_senha: '',
                cidade: '',
                tipo_usuario: ''
            }

            handleSubmit(Cadastro, id);

        }

        return (
            <div>
                <header>
                    <nav className="nav-bar">
                        <div className="logo">
                            <h1>ViverBem+</h1>
                        </div>
                        <div className="nav-list">
                            <ul>
                                <li className="nav-item">
                                    <a href="/Bem_vindo" className="nav-link">Página inicial</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Login" className="nav-link">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main>
                    <section className="login-section">
                        <h2>{formData.id ? 'Editar Usuário' : 'Cadastre-se'}</h2>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="nome" placeholder="Nome Completo *" value={formData.nome} onChange={handleChange} required />
                                <input type="tel" name="telefone" placeholder="Telefone *" value={formData.telefone} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
                                <input type="text" name="cpf" placeholder="CPF *" value={formData.cpf} onChange={handleChange} required />
                                <input type="text" name="matricula" placeholder="Matrícula (profissionais)" value={formData.matricula} onChange={handleChange} />
                                <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} required />
                                <input type="password" name="senha" placeholder="Crie uma senha *" value={formData.senha} onChange={handleChange} required />
                                <input type="password" name="confirmar_senha" placeholder="Confirme sua senha *" value={formData.confirmar_senha} onChange={handleChange} required />

                                <select name="cidade" value={formData.cidade} onChange={handleChange} required>
                                    <option value="">Selecione sua cidade:</option>
                                    <option value="cariacica">Cariacica</option>
                                    <option value="fundao">Fundão</option>
                                    <option value="guarapari">Guarapari</option>
                                    <option value="serra">Serra</option>
                                    <option value="viana">Viana</option>
                                    <option value="vila velha">Vila Velha</option>
                                    <option value="vitoria">Vitória</option>
                                </select>

                                <select name="tipo_usuario" value={formData.tipo_usuario} onChange={handleChange} required>
                                    <option value="">Selecione uma opção:</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="profissional">Profissional</option>
                                </select>

                                <button type="submit" className="register-link">
                                    {formData.id ? 'Salvar' : 'Cadastre-se'}
                                </button>
                            </form>
                        </div>
                    </section>

                    <section className="user-list">
                        <h2>Usuários Cadastrados</h2>
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

                <footer className="endereco">
                    <p>
                        ViverBem+<br />
                        Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES
                    </p>
                </footer>
            </div>
        );
    };
}

    export default Cadastro;