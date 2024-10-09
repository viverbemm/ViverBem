import React, { useState } from 'react';
import './App.css';

function App() {
    // Estado inicial para os dados de cadastro
    const [cadastros, setCadastros] = useState([]);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        cpf: '',
        matricula: '',
        data_nascimento: '',
        senha: '',
        confirmar_senha: '',
        cidade: '',
        tipo: '',
    });

    // Função para manipular mudanças nos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para criar um novo cadastro
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.senha !== formData.confirmar_senha) {
            alert('As senhas não coincidem!');
            return;
        }
        setCadastros([...cadastros, formData]);
        setFormData({
            nome: '',
            telefone: '',
            email: '',
            cpf: '',
            matricula: '',
            data_nascimento: '',
            senha: '',
            confirmar_senha: '',
            cidade: '',
            tipo: '',
        });
    };

    // Função para remover um cadastro
    const handleDelete = (index) => {
        setCadastros(cadastros.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <header>
                <nav className="nav-bar">
                    <div className="logo">
                        <h1>ViverBem+</h1>
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li className="nav-item"><a href="#" className="nav-link">Página inicial</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main>
                <section className="login-section">
                    <h2>Cadastre-se</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Nome Completo *" required />
                        <input type="tel" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="Telefone *" required />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" required />
                        <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} placeholder="CPF *" required />
                        <input type="text" name="matricula" value={formData.matricula} onChange={handleInputChange} placeholder="Matrícula (profissionais)" />
                        <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleInputChange} placeholder="Data de nascimento *" required />
                        <input type="password" name="senha" value={formData.senha} onChange={handleInputChange} placeholder="Crie uma senha *" required />
                        <input type="password" name="confirmar_senha" value={formData.confirmar_senha} onChange={handleInputChange} placeholder="Confirme sua senha *" required />

                        <select name="cidade" value={formData.cidade} onChange={handleInputChange} required>
                            <option value="">Selecione sua cidade:</option>
                            <option value="cariacica">Cariacica</option>
                            <option value="fundao">Fundão</option>
                            <option value="guarapari">Guarapari</option>
                            <option value="serra">Serra</option>
                            <option value="viana">Viana</option>
                            <option value="vila velha">Vila Velha</option>
                            <option value="vitoria">Vitória</option>
                        </select>

                        <select name="tipo" value={formData.tipo} onChange={handleInputChange} required>
                            <option value="">Selecione uma opção:</option>
                            <option value="cliente">Cliente</option>
                            <option value="profissional">Profissional</option>
                        </select>

                        <button type="submit">Cadastrar</button>
                    </form>
                </section>

                <section className="cadastro-list">
                    <h2>Cadastros Realizados</h2>
                    <ul>
                        {cadastros.map((cadastro, index) => (
                            <li key={index}>
                                {cadastro.nome} - {cadastro.email} ({cadastro.tipo})
                                <button onClick={() => handleDelete(index)}>Excluir</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <footer className="endereco">
                <p>ViverBem+<br />Centro Empresarial Shopping Praia da Costa, 245, Vila Velha, ES</p>
            </footer>
        </div>
    );
}

export default App;
