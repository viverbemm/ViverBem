import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




// PERFIL

import { createPerfil, deletePerfil, readPerfil, showOnePerfil, updatePerfil } from "../models/PerfilModel.js";

export async function criarPerfil(req, res) {
    console.log('UsuarioController :: criarPerfil');
    const usuario = req.body;
    const { imagem } = req.files;

    const extensao = path.extname(imagem.name).toLocaleLowerCase();
    const extensoesPermitidas = ['.jpg', '.png', '.jpeg', '.webp', '.heif', '.heic', '.svg', '.bmp'];

    if (!usuario.experiencia || !usuario.formacao || !usuario.fale_sobre || !usuario.valor_diaria || !imagem) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    } else {
        if (extensoesPermitidas.includes(extensao)) {
            const nomeImg = `${Date.now()}${extensao}`;
            try {
                const [status, resposta] = await createPerfil(usuario, usuario.id_usuario,nomeImg,imagem);
                return res.status(status).json(resposta);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: 'Erro ao criar usuario' });
            }
            
        } else {
            return res.status(415).json({ message: 'Tipo de arquivo inválido' });
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
    const { id_dado } = req.params;

    if (!id_dado) {
        res.status(400).json({ message: 'id invalido' })
    } else {
        try {
            const [status, resposta] = await showOnePerfil(id_dado);
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
        const [status, resposta] = await deletePerfil(id_usuario, id_dado);  // Corrigido para passar os parâmetros corretos
        return res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return res.status(500).json({ message: 'Erro ao deletar o usuário' });
    }
}

export async function atualizarPerfil(req, res) {
    console.log('UsuarioController :: atualizarPerfil');
    console.log(req.params);
    const { id_dado } = req.params;  // Garantido que o id_dado também seja capturado dos parâmetros
    const { experiencia, formacao, fale_sobre, valor_diaria } = req.body;

    if (!experiencia || !formacao || !fale_sobre || !valor_diaria) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const [status, resposta] = await updatePerfil({ experiencia, formacao, fale_sobre, valor_diaria }, id_dado);
        return res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
}

export async function downloadImagem(req, res) {
    console.log('ImagemController :: Mostrando Imagem')

    const { nomeImg } = req.params;
    const caminho = path.join(__dirname, '..', '..', 'public', 'img', nomeImg);

    console.log(caminho);

    res.sendFile(caminho, (erro) => {
        if (erro) {
            console.log(erro)
            res.status(404).json({ message: 'Imagem não encontrada' })
        }
    });
}