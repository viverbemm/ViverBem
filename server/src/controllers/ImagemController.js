import { createImagem, readImagem, showOneImage, updateImagem, deletarImagem } from '../models/ImagemModel.js';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function criarImagem(req, res) {
    console.log('ImagemController :: Criando Imagem');
    const { imagem } = req.files;

    if (!imagem) {
        return res.status(400).json({ message: 'Imagem é obrigatória' });
    }

    const extensao = path.extname(imagem.name).toLocaleLowerCase();
    const extensoesPermitidas = ['.jpg', '.png', '.jpeg'];

    if (extensoesPermitidas.includes(extensao)) {
        const nomeImg = `${Date.now()}${extensao}`;

        try {
            const [status, resposta] = await createImagem(nomeImg, imagem);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao cadastrar a imagem' });
        }
    } else {
        return res.status(415).json({ message: 'Tipo de arquivo inválido' });
    }
}

export async function mostrarImagem(req, res) {
    console.log('ImagemController :: Mostrando lista de imagens');
    try {
        const [status, resposta] = await readImagem();
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao recuperar imagens' });
    }
}

export async function editarImagem(req, res) {
    console.log('ImagemController :: Editando uma imagem');
    const { id_imagem } = req.params;
    const { imagem } = req.files;

    if (!imagem) {
        return res.status(400).json({ message: 'Imagem é obrigatória' });
    }

    const extensao = path.extname(imagem.name).toLocaleLowerCase();
    const extensoesPermitidas = ['.jpg', '.png', '.jpeg', '.webp', '.heif', '.heic', '.svg', '.bmp'];

    if (extensoesPermitidas.includes(extensao)) {
        const nomeImg = `${Date.now()}${extensao}`;

        try {
            const [status, resposta] = await updateImagem(id_imagem, nomeImg);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao editar imagem' });
        }
    } else {
        return res.status(415).json({ message: 'Tipo de arquivo inválido' });
    }
}

export async function deletarImagem(req, res) {
    console.log('ImagemController :: Deletando Imagem');
    const { id_imagem } = req.params;

    try {
        const [status, resposta] = await deletarImagem(id_imagem);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao deletar imagem' });
    }
}

export async function mostrarUmaImagem(req, res) {
    console.log('ImagemController :: Mostrar uma imagem');
    const { id_imagem } = req.params;

    try {
        const [status, retorno] = await showOneImage(id_imagem);
        res.status(status).json(retorno);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao recuperar a imagem' });
    }
}
