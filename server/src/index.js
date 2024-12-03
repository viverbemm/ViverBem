// src/index.js
import express from 'express';
import fileUpload from 'express-fileupload';
import { criarImagem } from './controllers/ImagemController.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());  // Adicionando o middleware para lidar com uploads de arquivos

// Rota para upload de imagens
app.post('/upload', criarImagem);

app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
});
