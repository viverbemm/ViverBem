import mysql from 'mysql2/promise';
import db from '../conexao.js';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createImagem(nomeImg, imagem) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: createImagem');
    const sql = 'INSERT INTO imagens (caminho) VALUES (?)'; // Só armazenamos o caminho da imagem
    const params = [nomeImg];

    try {
        await imagem.mv(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));
        const [retorno] = await conexao.query(sql, params);
        return [201, 'Imagem cadastrada']
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function readImagem() {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: readImagem');
    const sql = 'SELECT * FROM imagens';
    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno]
    } catch (error) {
        console.log(error)
        return [500, error];
    }
}

export async function updateImagem(id_imagem, nomeImg) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: updateImagem');
    const sql = 'UPDATE imagens SET caminho=? WHERE id_imagem = ?';
    const params = [nomeImg, id_imagem];

    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.affectedRows < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, { message: 'Imagem atualizada' }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function deletarImagem(id_imagem) {
    console.log('ImagemModel :: deletarImagem');
    const conexao = mysql.createPool(db);
    const sqlImagem = 'SELECT * FROM imagens WHERE id_imagem=?'
    const sql = 'DELETE FROM imagens WHERE id_imagem = ?';
    const params = [id_imagem];

    try {
        const [imagem] = await conexao.query(sqlImagem, params);
        if (imagem.length > 0) {
            const nomeImg = imagem[0].caminho;
            await conexao.query(sql, params);
            await fs.unlink(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));
        }
        const [retorno] = await conexao.query(sql, params);
        if (retorno.affectedRows < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, { message: 'Imagem deletada' }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showOneImage(id_imagem) {
    console.log('ImagemModel :: showOneImage');
    const conexao = mysql.createPool(db);
    const sql = 'SELECT * FROM imagens WHERE id_imagem=?'
    const params = [id_imagem];

    try {
        const [retorno] = await conexao.query(sql, params);

        if (retorno.length < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, retorno[0]];

    } catch (error) {
        console.log(error);
        return [500, error];
    }
}