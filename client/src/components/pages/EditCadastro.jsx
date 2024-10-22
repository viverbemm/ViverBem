import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormCadastro from   '../formCadastro/FormCadastro';
import Navbar from '../layout/navBar'



function EditCadastro() {
    const { id } = useParams();
    async function editarCadastro(infoCadastro, id) {
        try {
            const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Conten-Type': 'application/json'
                },
                body: JSON.stringify(infoCadastro)
            });
            if (!resposta.ok) {
                const retorno = await resposta.json();
                console.log('Erro ao editar usuário', retorno);
            } else {
                console.log('Usuário Editado')
                alert('Usuário Editado coom sucesso')
            }
        } catch (error) {
            console.log('Erro ao editar usuário', error);


        }
    }
    return (
        <div>
            <Navbar />
            <FormCadastro titulo='Editar Usuário' textoBotao='Salvar' id={id} handleSubmit={editarCadastro} />
        </div>
    )
}

export default EditCadastro;