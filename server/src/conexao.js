import mysql from 'mysql2/promise';  // Usando mysql2 com Promise API

// Criando a configuração de conexão sem connectionId
const db = {
    host: 'localhost',
    user: 'root',
    password: '',  // Use a senha real do seu banco
    database: 'imagens_viver_bem_mais'
};

export default db;
