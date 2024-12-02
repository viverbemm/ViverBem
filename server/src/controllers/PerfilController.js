import { createUsuario, readUsuario, showOneUsuario, deleteUsuario, updateUsuario } from "../models/UsuarioModel.js";

// Função para criar um usuário
export async function criarUsuario(req, res) {
    console.log('UsuarioController :: criarUsuario');
    const usuario = req.body;

    // Verifica se todos os campos obrigatórios foram enviados
    if (!usuario.experiencia || !usuario.formacao || !usuario.fale_sobre || !usuario.valor_diaria) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    } else {
        try {
            const [status, resposta] = await createUsuario(usuario, usuario.id_usuario);
            return res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Erro ao criar usuario' });
        }
    }
}

// Função para mostrar todos os usuários
export async function mostrarUsuario(req, res) {
    console.log('UsuarioController :: mostrarUsuario');
    try {
        const [status, resposta] = await readUsuario();
        return res.status(status).json(resposta);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao mostrar usuarios' });
    }
}

// Função para mostrar um usuário específico
export async function mostrarUmUsuario(req, res) {
    console.log('UsuarioController :: mostrarUmUsuario');
    const { id_usuario } = req.params;

    // Verifica se o ID foi fornecido
    if (!id_usuario) {
        return res.status(400).json({ message: 'ID inválido' });
    } else {
        try {
            const [status, resposta] = await showOneUsuario(id_usuario);
            return res.status(status).json(resposta);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao mostrar um usuário' });
        }
    }
}

// Função para deletar um usuário
export async function deletarUsuario(req, res) {
    console.log('UsuarioController :: deletarUsuario');
    const { id_usuario } = req.params;

    // Verifica se o ID foi fornecido
    if (!id_usuario) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {
        const [status, resposta] = await deleteUsuario(id_usuario);
        return res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return res.status(500).json({ message: 'Erro ao deletar o usuário' });
    }
}

// Função para atualizar os dados de um usuário
export async function atualizarUsuario(req, res) {
    console.log('UsuarioController :: atualizarUsuario');
    const { id_usuario } = req.params;
    const { experiencia, formacao, fale_sobre, valor_diaria } = req.body;

    // Verifica se todos os campos obrigatórios foram enviados
    if (!experiencia || !formacao || !fale_sobre || !valor_diaria) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        // Atualiza o perfil do usuário com o ID e os novos dados
        const [status, resposta] = await updateUsuario({ experiencia, formacao, fale_sobre, valor_diaria }, id_usuario);
        return res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
}
