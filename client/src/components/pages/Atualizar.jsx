import React, { useState } from 'react';
import styles from './Atualizar.module.css';

function AtualizarGestao() {
    // Estado para controlar quais campos podem ser editados
    const [editMode, setEditMode] = useState({
        nome: false,
        telefone: false,
        pronomes: false,
        genero: false,
        dataNascimento: false,
        email: false,
        cidade: false
    });

    // Função para alternar entre modo de edição e visualização
    const toggleEdit = (field) => {
        setEditMode(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    return (
        <div className="container">
            <div className="sidebar">
                <h2>Olá administrador</h2>
                <ul>
                    <li><a href="#">Atualizar minhas informações</a></li>
                    <li><a href="#">Incluir um novo administrador</a></li>
                    <li><a href="#">Preferências gerais</a></li>
                </ul>
            </div>

            <div className="content">
                <h2>Dados pessoais</h2>

                <div className="info-item">
                    <span>Nome completo:</span>
                    <input
                        type="text"
                        id="nome"
                        value="Isaac Lucca De Paula Barbara"
                        disabled={!editMode.nome}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('nome')}>
                        {editMode.nome ? 'Salvar' : 'Editar'}
                    </a>
                </div>

                <div className="info-item">
                    <span>Telefone:</span>
                    <input
                        type="text"
                        id="telefone"
                        value="(27) 99823-457"
                        disabled={!editMode.telefone}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('telefone')}>
                        {editMode.telefone ? 'Salvar' : 'Editar'}
                    </a>
                </div>

                <div className="info-item">
                    <span>Pronomes:</span>
                    <input
                        type="text"
                        id="pronomes"
                        value="Nenhum"
                        disabled={!editMode.pronomes}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('pronomes')}>
                        {editMode.pronomes ? 'Salvar' : 'Editar'}
                    </a>
                </div>

                <div className="info-item">
                    <span>Gênero:</span>
                    <input
                        type="text"
                        id="genero"
                        value="Masculino"
                        disabled={!editMode.genero}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('genero')}>
                        {editMode.genero ? 'Salvar' : 'Editar'}
                    </a>
                </div>

                <div className="info-item">
                    <span>Data de nascimento:</span>
                    <input
                        type="text"
                        id="dataNascimento"
                        value="19/01/2002"
                        disabled={!editMode.dataNascimento}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('dataNascimento')}>
                        {editMode.dataNascimento ? 'Salvar' : 'Editar'}
                    </a>
                </div>

                <div className="info-item">
                    <span>E-mail padrão:</span>
                    <input
                        type="email"
                        id="email"
                        value="isaaclucca@viverbem.com"
                        disabled={!editMode.email}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('email')}>
                        {editMode.email ? 'Salvar' : 'Editar'}
                    </a>
                </div>

                <div className="info-item">
                    <span>Cidade:</span>
                    <input
                        type="text"
                        id="cidade"
                        value="Vila Velha - ES"
                        disabled={!editMode.cidade}
                    />
                    <a href="#" className="edit-btn" onClick={() => toggleEdit('cidade')}>
                        {editMode.cidade ? 'Salvar' : 'Editar'}
                    </a>
                </div>
            </div>

            <footer>
                <img src="logo.png" alt="ViverBem+" />
            </footer>
        </div>
    );
}

export default AtualizarGestao;
