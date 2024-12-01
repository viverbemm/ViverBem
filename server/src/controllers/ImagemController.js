import path from 'path';
import url from 'url';
import { createImagem } from '../models/ImagemModel.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para criar e salvar a imagem
export async function criarImagem(req, res) {
    console.log('ImagemController :: Criando Imagem');
    const { descricao } = req.body;
    const { imagem } = req.files;

    // Verificar se a descrição e a imagem foram enviadas
    if (!descricao || !imagem) {
        return res.status(400).json({ message: 'Imagem e descrição são obrigatórios' });
    }

    // Verificar a extensão do arquivo de imagem
    const extensao = path.extname(imagem.name).toLocaleLowerCase();
    const extensoesPermitidas = ['.jpg', '.png', '.jpeg'];

    // Verificar se a extensão do arquivo é permitida
    if (extensoesPermitidas.includes(extensao)) {
        const nomeImg = `${Date.now()}${extensao}`; // Gerar nome único para a imagem

        try {
            // Salvar a imagem no diretório desejado e registrar no banco de dados
            const [status, resposta] = await createImagem(descricao, nomeImg, imagem);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao salvar a imagem' });
        }
    } else {
        // Retornar erro caso a extensão do arquivo seja inválida
        res.status(415).json({ message: 'Arquivo inválido' });
    }
}

// Função para listar as imagens salvas
export async function mostrarImagem(req, res) {
    console.log('ImagemController :: Mostrando lista de imagens');
    try {
        const [status, resposta] = await readImagem(); // Recuperar imagens do banco de dados
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao listar as imagens' });
    }
}
