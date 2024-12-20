import { useState} from 'react';
import FormCadastro from '../formCadastro/FormCadastro';


function Cadastro() {

    async function cadastrarUsuario(infoCadastro) {
        try {
            const resposta = await fetch('http://localhost:5000/usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(infoCadastro)
            });

            if (!resposta.ok) {
                console.log('Erro ao cadastrar usuario');
            } else {
                const {id_usuario} = await resposta.json();
                console.log(id_usuario)
                localStorage.setItem("id_usuario",id_usuario)
                alert('usuario cadastrado com sucesso');
            }

        } catch (error) {
            console.error('Erro ao cadastrar usuario', error)
        }

    }

    return (
        <div>
          
            <FormCadastro nome='teste' handleSubmit={cadastrarUsuario}  />
            
        </div>
    )
}

export default Cadastro;