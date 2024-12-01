import mysql from 'mysql2/promise';
import db from '../conexao.js';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createImagem(descricao, nomeImg, imagem) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: createImagem');
    
    // Definindo o caminho onde a imagem será armazenada no servidor
    const caminhoImagem = path.join(__dirname, '..', '..', 'public', 'img', nomeImg);
    
    // Query para inserir a descrição e o caminho da imagem no banco
    const sql = 'INSERT INTO imagens (descricao, caminho) VALUES (?, ?)';
    const params = [descricao, nomeImg];

    try {
        // Movendo o arquivo da imagem para a pasta do servidor
        await imagem.mv(caminhoImagem);
        
        // Inserindo a imagem no banco de dados
        const [retorno] = await conexao.query(sql, params);

        // Retorna sucesso caso tudo ocorra corretamente
        return [201, 'Imagem cadastrada com sucesso'];
    } catch (error) {
        console.log(error);
        // Caso ocorra algum erro, retorna o erro
        return [500, error];
    }
}
