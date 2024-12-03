import path from 'path';
import url from 'url';
import { createImagem } from '../models/ImagemModel.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para criar e salvar a imagem
export async function criarImagem(req, res) {
    console.log('ImagemController :: Criando Imagem');
    console.log('Arquivos recebidos:', req.files);  // Log de depuração para visualizar o conteúdo de req.files

    // Verifique se `req.files` e `req.files.imagem` existem
    if (!req.files || !req.files.imagem) {
        console.log('Erro: Arquivo de imagem não enviado ou formato incorreto');
        return res.status(400).json({ message: 'Arquivo de imagem não enviado ou formato incorreto' });
    }

    const { descricao } = req.body;  // A descrição vem do corpo da requisição
    const { imagem } = req.files;    // A imagem vem de `req.files`

    // Se não houver descrição, retornar erro
    if (!descricao || descricao.trim() === '') {
        console.log('Erro: Descrição não fornecida');
        return res.status(400).json({ message: 'Descrição não fornecida' });
    }

    // Verificar a extensão do arquivo de imagem
    const extensao = path.extname(imagem.name).toLowerCase(); // Use `.toLowerCase()` para garantir a comparação sem sensibilidade a maiúsculas/minúsculas
    const extensoesPermitidas = ['.jpg', '.png', '.jpeg'];

    // Verificar se a extensão do arquivo é permitida
    if (!extensoesPermitidas.includes(extensao)) {
        console.log('Erro: Arquivo inválido. Apenas imagens .jpg, .png e .jpeg são permitidas');
        return res.status(415).json({ message: 'Arquivo inválido. Apenas imagens .jpg, .png e .jpeg são permitidas' });
    }

    const nomeImg = `${Date.now()}${extensao}`; // Gerar nome único para a imagem
    console.log(`Imagem gerada com nome: ${nomeImg}`);

    try {
        // Passar os dados para a função createImagem (descrição e nome da imagem)
        const [status, resposta] = await createImagem(descricao, nomeImg);

        // Logando a resposta e retornando
        console.log(`Status: ${status}, Resposta: ${resposta}`);
        
        // Salvar a imagem no sistema de arquivos
        const caminhoImagem = path.join(__dirname, '..', 'public', 'img', nomeImg);
        imagem.mv(caminhoImagem, (err) => {
            if (err) {
                console.log('Erro ao mover a imagem para o diretório:', err);
                return res.status(500).json({ message: 'Erro ao mover a imagem para o diretório' });
            }

            console.log('Imagem movida com sucesso');
            res.status(status).json({ message: resposta });
        });

    } catch (error) {
        console.log('Erro ao salvar a imagem no banco de dados:', error);
        res.status(500).json({ message: 'Erro ao salvar a imagem no banco de dados' });
    }
}
