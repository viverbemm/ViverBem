// src/models/ImagemModel.js
import mysql from 'mysql2/promise';
import db from '../conexao.js'; // Aqui você importa a configuração da conexão com o MySQL
import fs from 'fs/promises';  // Para manipulação de arquivos
import path from 'path';       // Para manipulação de caminhos
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createImagem(req, res) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: createImagem');
    
    // Verificando se o arquivo foi enviado
    if (!req.files || !req.files.imagem) {
        throw new Error('Nenhum arquivo foi enviado.');
    }

    const imagem = req.files.imagem;
    
    // Gerar nome único para a imagem
    const extensao = path.extname(imagem.name).toLowerCase();
    const nomeImagem = `${Date.now()}${extensao}`;

    // Definindo o caminho onde a imagem será salva
    const caminhoImagem = path.join(__dirname, '..', '..', 'public', 'img', nomeImagem);

    // Query para inserir a descrição e o caminho da imagem no banco
    const sql = 'INSERT INTO imagens (descricao, caminho) VALUES (?, ?)';
    const params = [descricao, nomeImagem];

    try {
        // Movendo o arquivo da imagem para a pasta pública
        await imagem.mv(caminhoImagem);
        
        // Inserindo no banco de dados
        const [result] = await conexao.query(sql, params);
        console.log('Imagem inserida com sucesso no banco de dados:', result);

        return { status: 201, message: 'Imagem cadastrada com sucesso!' };
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao salvar imagem no servidor ou banco de dados.');
    }
}
