import express from 'express';
import cors from 'cors';  // Usado para permitir requisições do front-end
import fileUpload from 'express-fileupload';  // Para lidar com uploads de arquivos
import { criarImagem, mostrarImagem } from './controllers/ImagemController.js';  // Importa suas rotas

const app = express();
const PORT = 5000;  // O back-end vai rodar na porta 5000

// Middlewares
app.use(express.json());  // Para analisar requisições com body JSON
app.use(cors());  // Permite requisições de outras origens (front-end no localhost)
app.use(fileUpload());  // Para permitir o upload de arquivos

app.get('/', (req, res) => {
    res.send('API Funcionando :)')
});

// Rotas
app.post('/upload', criarImagem);  // Rota para criar e salvar a imagem
app.get('/imagens', mostrarImagem);  // Rota para mostrar as imagens salvas

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
