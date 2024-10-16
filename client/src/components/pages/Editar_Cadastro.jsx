import { useState } from "react";
import Tela_Cadastro from './Tela_Cadastro';
import { useParams } from "react-router-dom";


function Editar() {
    const { id } = useParams();

    async function editarCadastro(infoUsuarios, id) {
        try {
            const resposta = await fetch(`http://localhost:3001/Controle${id}`, {
                method: 'PUT',
                headers: {
                    'Conten-Type': 'application/json'
                },
                body: JSON.stringify(infoUsuarios)
            });
            if (!resposta.ok) {
                const retorno = await resposta.json();
                console.log('Erro ao Editar Usuario', retorno);
            } else {
                console.log('Usuario Editado')
                alert('Usuario Editado com sucesso')
            }
        } catch (error) {
            console.log('Erro ao editar usuario', error);


        }
    }
    return (
        <div>
            
            <Tela_Cadastro titulo='Editar Usuario' textoBotao='Salvar' id={id} handleSubmit={editarCadastro} />
        </div>
    )
}

export default Editar;