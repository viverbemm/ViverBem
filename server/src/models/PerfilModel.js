import mysql from 'mysql2/promise';
import db from '../conexao.js';

// Função para criar um perfil de usuário
export async function createUsuario(completar_perfil, id_usuario) {
    console.log('UsuarioModel :: createUsuario');
    const conexao = mysql.createPool(db);

    const sql = 'INSERT INTO completar_perfil (id_usuario, experiencia, formacao, fale_sobre, valor_diaria) VALUES (?, ?, ?, ?, ?)';

    const params = [
        id_usuario, // ID do usuário que vem da tabela usuarios
        completar_perfil.experiencia,
        completar_perfil.formacao,
        completar_perfil.fale_sobre,
        completar_perfil.valor_diaria,
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log(retorno.insertId);
        return [201, { message: 'Usuário Cadastrado' }];
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao cadastrar usuário' }];
    }
}

// Função para buscar todos os usuários e seus perfis
export async function readUsuario() {
    console.log('UsuarioModel :: readUsuario');
    const conexao = mysql.createPool(db);

    const sql = 'SELECT * FROM completar_perfil';

    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno];
    } catch (error) {
        return [500, error];
    }
}

// Função para buscar um perfil de usuário pelo ID
export async function showOneUsuario(id_usuario) {
    console.log('UsuarioModel :: showOneUsuario');
    const conexao = mysql.createPool(db);

    const sql = `
        SELECT cp.*, u.nome, u.email
        FROM completar_perfil cp
        JOIN usuarios u ON u.id_usuario = cp.id_usuario
        WHERE cp.id_usuario = ?
    `;
    const params = [id_usuario];

    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.length < 1) {
            return [404, { message: 'Usuário não encontrado' }];
        } else {
            return [200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao mostrar usuário' }];
    }
}

// Função para deletar o perfil de um usuário
export async function deleteUsuario(id_usuario) {
    const conexao = mysql.createPool(db);

    const sql = 'DELETE FROM completar_perfil WHERE id_usuario = ?';

    try {
        const [retorno] = await conexao.query(sql, [id_usuario]);
        if (retorno.affectedRows > 0) {
            return [200, { message: 'Usuário deletado com sucesso' }];
        } else {
            return [404, { message: 'Usuário não encontrado' }];
        }
    } catch (error) {
        console.error('Erro ao executar query:', error);
        return [500, { message: 'Erro ao deletar usuário' }];
    }
}

// Função para atualizar o perfil de um usuário
export async function updateUsuario(completar_perfil, id_usuario) {
    const conexao = mysql.createPool(db);

    const sql = `
        UPDATE completar_perfil
        SET experiencia = ?, formacao = ?, fale_sobre = ?, valor_diaria = ?
        WHERE id_usuario = ?
    `;

    const params = [
        completar_perfil.experiencia,
        completar_perfil.formacao,
        completar_perfil.fale_sobre,
        completar_perfil.valor_diaria,
        id_usuario // ID do usuário para garantir que está atualizando o perfil correto
    ];

    try {
        const [resultado] = await conexao.query(sql, params);

        if (resultado.affectedRows > 0) {
            return [200, { message: 'Usuário atualizado com sucesso' }];
        } else {
            return [404, { message: 'Usuário não encontrado' }];
        }
    } catch (error) {
        console.error('Erro ao executar query:', error);
        return [500, { message: 'Erro ao atualizar usuário' }];
    }
}
