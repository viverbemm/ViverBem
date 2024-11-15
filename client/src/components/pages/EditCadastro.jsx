import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importando useNavigate
import FormCadastro from '../formCadastro/FormCadastro';

function EditCadastro() {
    const { id } = useParams();
    const navigate = useNavigate(); // Criando a instância do navigate

    async function editarCadastro(infoCadastro, id) {
        try {
            const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json' // Corrigido 'Conten-Type' para 'Content-Type'
                },
                body: JSON.stringify(infoCadastro)
            });
            if (!resposta.ok) {
                const retorno = await resposta.json();
                console.log('Erro ao editar usuário', retorno);
            } else {
                console.log('Usuário Editado');
                alert('Usuário Editado com sucesso');
                
                // Redireciona para a tela de controle
                navigate('/controle');
            }
        } catch (error) {
            console.log('Erro ao editar usuário', error);
        }
    }

    return (
        <div>
            <navGestao />
            <FormCadastro titulo='' textoBotao='Salvar' id={id} handleSubmit={editarCadastro} />
        </div>
    );
}

export default EditCadastro;
