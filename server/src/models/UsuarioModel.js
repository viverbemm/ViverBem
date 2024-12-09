import mysql from 'mysql2/promise';
import db from '../conexao.js';


//USUARIO

export async function createUsuario(usuario) {
    console.log('UsuarioModel :: createUsuario');
    const conexao = mysql.createPool(db);

    const sql = 'INSERT INTO usuarios (nome_completo,telefone,email,cpf,data_nascimento,senha,cidade) VALUES (?,?,?,?,?,?,?)';

    const params = [
        usuario.nome_completo,
        usuario.telefone,
        usuario.email,
        usuario.cpf,
        usuario.data_nascimento,
        usuario.senha,
        usuario.cidade,
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log(retorno.insertId);
        return [201, { id_usuario:retorno.insertId, message: 'Usuário Cadastrado' }]
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao cadastrar usuário' }]
    }
}

export async function readUsuario() {
    console.log('UsuarioModel :: readUsuario');
    const conexao = mysql.createPool(db);

    const sql = 'SELECT * FROM usuarios';

    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno];
    } catch (error) {
        return [500, error]
    }
}

export async function showOneUsuario(id_usuario) {
    console.log('UsuarioModel :: showOneUsuario');
    const conexao = mysql.createPool(db);

    const sql = 'SELECT * FROM usuarios WHERE id_usuario=?';
    const params = [id_usuario];

    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.length < 1) {
            return [404, { message: 'Usuario não encontrado' }];
        } else {
            return [200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao mostrar usuário' }];
    }
}

export async function deleteUsuario(id_usuario) {
    const conexao = mysql.createPool(db);

    const sql = 'DELETE FROM usuarios WHERE id_usuario = ?';

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


export async function updateUsuario(id_usuario, usuario) {
    const conexao = mysql.createPool(db);

    const sql = `
        UPDATE usuarios
        SET nome_completo = ?, telefone = ?, email = ?, data_nascimento = ?, senha = ?, cidade = ?
        WHERE id_usuario = ?
    `;

    const params = [
        usuario.nome_completo,
        usuario.telefone,
        usuario.email,
        usuario.data_nascimento,
        usuario.senha,
        usuario.cidade,
        id_usuario,
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



export async function findUserByLoginPassword(cpf, senha) {
    console.log('UsuarioModel :: findUserByLoginPassword');
    const conexao = mysql.createPool(db);
    const sql = 'SELECT id_usuario FROM usuarios WHERE cpf = ? AND senha = ?';
    const params = [cpf, senha];
    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.length < 1) {
            return [404, { message: 'cpf ou senha invalidos' }];
        } else {
            return [200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao mostrar usuário' }];
    }
}

