import { createUsuario, findUserByLoginPassword, readUsuario, showOneUsuario, deleteUsuario, updateUsuario, createPerfil, readPerfil, showOnePerfil, deletePerfil, updatePerfil, } from "../models/UsuarioModel.js";


// USUARIO


export async function criarUsuario(req, res) {
    console.log('UsuarioController :: criarUsuario');
    const usuario = req.body;

    if (!usuario.nome_completo || !usuario.telefone || !usuario.email || !usuario.cpf || !usuario.data_nascimento || !usuario.senha || !usuario.cidade) {
        res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    } else {
        try {
            const [status, resposta] = await createUsuario(usuario);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao criar usuario' })
        }
    }
}

export async function mostrarUsuario(req, res) {
    console.log('UsuarioController :: mostrarUsuario');
    try {
        const [status, resposta] = await readUsuario();
        res.status(status).json(resposta);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao mostrar usuarios' })
    }
}

export async function mostrarUmUsuario(req, res) {
    console.log('UsuarioController :: mostrarUmUsuario');
    const { id_usuario } = req.params;

    if (!id_usuario) {
        res.status(400).json({ message: 'id invalido' })
    } else {
        try {
            const [status, resposta] = await showOneUsuario(id_usuario);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao mostrar um usuário' })
        }
    }
}



export async function deletarUsuario(req, res) {
    console.log('UsuarioController :: deletarUsuario');
    const { id_usuario } = req.params;

    if (!id_usuario) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {

        const [status, resposta] = await deleteUsuario(id_usuario);
        res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ message: 'Erro ao deletar o usuário' });
    }
}

export async function atualizarUsuario(req, res) {
    console.log('UsuarioController :: atualizarUsuario');
    const { id_usuario } = req.params;
    const { nome_completo, telefone, email, data_nascimento, senha, cidade } = req.body;


    if (!id_usuario || !nome_completo || !telefone || !email || !data_nascimento || !senha || !cidade) {
        return res.status(400).json({ message: 'ID do usuário ou dados inválidos' });
    }

    try {
        const [status, resposta] = await updateUsuario(id_usuario, {
            nome_completo,
            telefone,
            email,
            data_nascimento,
            senha,
            cidade,

        });
        res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
}


export async function logarUsuario(req, res) {
    console.log('UsuarioController :: logarUsuario');
    const { cpf, senha } = req.body;

    if (!cpf || !senha) {
        res.status(400).json({ message: 'cpf e senha são obrigatórios' });
    } else {
        try {
            const [status, resposta] = await findUserByLoginPassword(cpf, senha);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao efetuar login' })
        }
    }
}





// PERFIL

export async function criarPerfil(req, res) {
    console.log('UsuarioController :: criarPerfil');
    const usuario = req.body;

    if (!usuario.experiencia || !usuario.formacao || !usuario.fale_sobre || !usuario.valor_diaria) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    } else {
        try {
            const [status, resposta] = await createPerfil(usuario, usuario.id_usuario, usuario.id_dado);
            return res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Erro ao criar usuario' });
        }
    }
}

export async function lerPerfil(req, res) {
    console.log('UsuarioController :: lerPerfil');
    try {
        const [status, resposta] = await lerPerfil();
        return res.status(status).json(resposta);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao mostrar usuarios' });
    }
}

export async function mostrarPerfil(req, res) {
    console.log('UsuarioController :: mostrarPerfil');
    


    try {
        const [status, resposta] = await readPerfil();  // Corrigido para passar os parâmetros corretos
        return res.status(status).json(resposta);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao mostrar um perfil' });
    }
}



export async function mostrarUmPerfil(req, res) {
    console.log('UsuarioController :: mostrarUmPerfil');
    const { id_usuario, id_dado } = req.params;

    if (!id_usuario || !id_dado) {
        res.status(400).json({ message: 'id invalido' })
    } else {
        try {
            const [status, resposta] = await showOneUsuario(id_usuario, id_dado);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao mostrar um perfil' })
        }
    }
}




export async function deletarPerfil(req, res) {
    console.log('UsuarioController :: deletarPerfil');
    const { id_usuario, id_dado } = req.params;  // Corrigido aqui para pegar também o id_dado dos parâmetros

    if (!id_usuario || !id_dado) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {
        const [status, resposta] = await deletarPerfil(id_usuario, id_dado);  // Corrigido para passar os parâmetros corretos
        return res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return res.status(500).json({ message: 'Erro ao deletar o usuário' });
    }
}

export async function atualizarPerfil(req, res) {
    console.log('UsuarioController :: atualizarPerfil');
    const { id_usuario, id_dado } = req.params;  // Garantido que o id_dado também seja capturado dos parâmetros
    const { experiencia, formacao, fale_sobre, valor_diaria } = req.body;

    if (!experiencia || !formacao || !fale_sobre || !valor_diaria) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const [status, resposta] = await atualizarPerfil({ experiencia, formacao, fale_sobre, valor_diaria }, id_usuario, id_dado);
        return res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
}
