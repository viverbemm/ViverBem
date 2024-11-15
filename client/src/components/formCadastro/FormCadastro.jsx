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
        cidade: ''
    });
    const [errors, setErrors] = useState({
        cpf: '',
        idade: '',
        senha: '',
        confirmar_senha: '',
        telefone: '',
        email: ''
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

        if (name === 'cpf') {
            let formattedCPF = value.replace(/\D/g, '').slice(0, 11);
            if (formattedCPF.length <= 3) {
                formattedCPF = formattedCPF.replace(/(\d{3})/g, '$1');
            } else if (formattedCPF.length <= 6) {
                formattedCPF = formattedCPF.replace(/(\d{3})(\d{0,3})/, '$1.$2');
            } else if (formattedCPF.length <= 9) {
                formattedCPF = formattedCPF.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
            } else {
                formattedCPF = formattedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
            }
            setFormCadastro({ ...formCadastro, cpf: formattedCPF });
        }

        if (name === 'telefone') {
            let formattedPhone = value.replace(/\D/g, '').slice(0, 11);

            if (formattedPhone.length <= 2) {
                formattedPhone = formattedPhone.replace(/(\d{0,2})/, '($1');
            } else if (formattedPhone.length <= 6) {
                formattedPhone = formattedPhone.replace(/(\d{2})(\d{0,4})/, '($1) $2');
            } else {
                formattedPhone = formattedPhone.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }

            setFormCadastro({ ...formCadastro, telefone: formattedPhone });
        }

        if (name !== 'cpf' && name !== 'telefone') {
            setFormCadastro({
                ...formCadastro,
                [name]: value
            });
        }
    }

    async function verificarCPFDuplicado(cpf) {
        try {
            const resposta = await fetch(`http://localhost:3001/usuarios?cpf=${cpf}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await resposta.json();
            return data.length > 0; // Retorna true se encontrar algum usuário com o CPF
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    function validateCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }

    function validateAge(dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        return age >= 18;
    }

    function validatePhone(phone) {
        const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        return regex.test(phone);
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    function validateForm() {
        const errors = {};
        if (!validateCPF(formCadastro.cpf)) {
            errors.cpf = 'CPF inválido';
        }

        if (!validateAge(formCadastro.data_nascimento)) {
            errors.idade = 'Você precisa ter pelo menos 18 anos';
        }

        if (!validatePhone(formCadastro.telefone)) {
            errors.telefone = 'Telefone inválido';
        }

        if (!validateEmail(formCadastro.email)) {
            errors.email = 'Email inválido';
        }

        if (!validatePassword(formCadastro.senha)) {
            errors.senha = 'Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números';
        }

        if (formCadastro.senha !== formCadastro.confirmar_senha) {
            errors.confirmar_senha = 'As senhas não coincidem';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    async function submit(e) {
        e.preventDefault();

        if (validateForm()) {
            const cpfDuplicado = await verificarCPFDuplicado(formCadastro.cpf);
            if (cpfDuplicado) {
                setErrors({ ...errors, cpf: 'Este CPF já está cadastrado.' });
                return;
            }

            handleSubmit(formCadastro, id);
            navigate('/pagamento');
        } else {
            alert('Por favor, corrija os erros no formulário.');
        }
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

    console.log(formCadastro);

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
                                {errors.telefone && <p>{errors.telefone}</p>}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formCadastro.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p>{errors.email}</p>}

                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="CPF *"
                                    value={formCadastro.cpf}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.cpf && <p>{errors.cpf}</p>}

                                <input
                                    type="date"
                                    name="data_nascimento"
                                    value={formCadastro.data_nascimento}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.idade && <p>{errors.idade}</p>}

                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Crie uma senha *"
                                    value={formCadastro.senha}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.senha && <p>{errors.senha}</p>}

                                <input
                                    type="password"
                                    name="confirmar_senha"
                                    placeholder="Confirme sua senha *"
                                    value={formCadastro.confirmar_senha}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmar_senha && <p>{errors.confirmar_senha}</p>}

                                <select
                                    className={styles.sec}
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
