import express from 'express';
import fileUpload from 'express-fileupload';
import {
    criarImagem,
    mostrarImagem,
    editarImagem,
    deletarImagem,
    mostrarUmaImagem
} from './controllers/ImagemController.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());  // Adicionando o middleware para lidar com uploads de arquivos

// Rota para upload de imagens
app.post('/upload', criarImagem);

// Rota para visualizar todas as imagens
app.get('/imagens', mostrarImagem);

// Rota para visualizar uma imagem específica
app.get('/imagens/:id_imagem', mostrarUmaImagem);

// Rota para editar uma imagem existente
app.put('/imagens/:id_imagem', editarImagem);

// Rota para excluir uma imagem
app.delete('/imagens/:id_imagem', deletarImagem);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
