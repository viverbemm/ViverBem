import mysql from 'mysql2/promise';
import db from '../conexao.js';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createPerfil(dados_profissionais, id_usuario, nomeImg, imagem) {
    console.log('UsuarioModel :: createPerfil');
    const conexao = mysql.createPool(db);

    const sql = 'INSERT INTO dados_profissionais ( id_usuario, experiencia, formacao, fale_sobre, valor_diaria, caminho_imagem) VALUES (?, ?, ?, ?, ?,?)';

    const params = [
        id_usuario,
        dados_profissionais.experiencia,
        dados_profissionais.formacao,
        dados_profissionais.fale_sobre,
        dados_profissionais.valor_diaria,
        nomeImg,
    ];

    try {
        console.log(nomeImg)
        await imagem.mv(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));
        const [retorno] = await conexao.query(sql, params);
        console.log(retorno.insertId);
        return [201, { message: 'Perfil Cadastrado' }];
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao cadastrar Perfil' }];
    }
}

// Função para buscar todos os usuários e seus perfis
export async function readPerfil() {
    console.log('UsuarioModel :: readPerfil');
    const conexao = mysql.createPool(db);

    const sql = 'SELECT * FROM dados_profissionais';

    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno];
    } catch (error) {
        return [500, error];
    }
}

// Função para buscar um perfil de usuário pelo ID
export async function showOnePerfil(id_dado) {
    console.log('UsuarioModel :: showOnePerfil');
    const conexao = mysql.createPool(db);

    const sql = `
        SELECT cp.*, u.nome_completo, u.email
        FROM dados_profissionais cp
        JOIN usuarios u ON u.id_usuario = cp.id_usuario
        WHERE cp.id_usuario = ?
    `;
    const params = [id_dado];

    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.length < 1) {
            return [404, { message: 'Perfil não encontrado' }];
        } else {
            return [200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao mostrar perfil' }];
    }
}



// Função para deletar o perfil de um usuário
export async function deletePerfil(id_usuario, id_dado) {
    const conexao = mysql.createPool(db);

    const sql = 'DELETE FROM dados_profissionais WHERE id_usuario = ?';


    try {
        const [retorno] = await conexao.query(sql, [id_usuario, id_dado]);
        if (retorno.affectedRows > 0) {
            return [200, { message: 'Perfil deletado com sucesso' }];
        } else {
            return [404, { message: 'Perfil não encontrado' }];
        }
    } catch (error) {
        console.error('Erro ao executar query:', error);
        return [500, { message: 'Erro ao deletar perfil' }];
    }
}

// Função para atualizar o perfil de um usuário
export async function updatePerfil(completar_perfil, id_dado) {
    const conexao = mysql.createPool(db);

    const sql = `
        UPDATE dados_profissionais
        SET experiencia = ?, formacao = ?, fale_sobre = ?, valor_diaria = ?
        WHERE id_dado= ?
    `;

    const params = [


        completar_perfil.experiencia,
        completar_perfil.formacao,
        completar_perfil.fale_sobre,
        completar_perfil.valor_diaria,
        id_dado
    ];

    try {
        const [resultado] = await conexao.query(sql, params);

        if (resultado.affectedRows > 0) {
            return [200, { message: 'Perfil atualizado com sucesso' }];
        } else {
            return [404, { message: 'Perfil não encontrado' }];
        }
    } catch (error) {
        console.error('Erro ao executar query:', error);
        return [500, { message: 'Erro ao atualizar perfil' }];
    }
}
