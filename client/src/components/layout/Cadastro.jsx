import Navbar from './navBar';
import { useState } from 'react';
import FormCadastro from '../formCadastro/FormCadastro';

function Cadastro() {

    async function cadastrarUsuario(infoCadastro) {
        try {
            const resposta = await fetch('http://localhost:3001/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(infoCadastro)
            });

            if (!resposta.ok) {
                console.log('Erro ao cadastrar usuario');
            } else {
                alert('usuario cadastrado com sucesso');
            }

        } catch (error) {
            console.error('Erro ao cadastrar usuario', error)
        }

    }

    return (
        <div>
            <Navbar />
            <FormCadastro titulo='Cadastrar Usuário' textoBotao='Cadastrar' handleSubmit={cadastrarAula} />
        </div>
    )
}

export default Cadastro