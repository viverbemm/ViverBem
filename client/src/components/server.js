const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let usuarios = [];
let nextId = 1;

// Endpoint para criar um usuário
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  const novoUsuario = { id: nextId++, nome, email, senha };  // Incluindo a senha no novo usuário
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Endpoint para atualizar um usuário
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;  
  const usuarioIndex = usuarios.findIndex((u) => u.id === parseInt(id));

  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex] = { id: parseInt(id), nome, email, senha };
    res.json(usuarios[usuarioIndex]);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Endpoint para buscar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Endpoint para deletar um usuário
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  usuarios = usuarios.filter((u) => u.id !== parseInt(id));
  res.status(204).send();
});

// Novo Endpoint para alterar a senha de um usuário
app.put('/usuarios/alterar-senha', (req, res) => {
  const { cpf, novaSenha } = req.body;  // Esperamos que CPF e nova senha sejam enviados no corpo da requisição

  // Verificando se os dados necessários foram enviados
  if (!cpf || !novaSenha) {
    return res.status(400).json({ message: 'CPF e nova senha são obrigatórios' });
  }

  // Encontrar o usuário com o CPF (usando email no lugar de CPF)
  const usuario = usuarios.find(u => u.email === cpf);  // Comparando CPF com email

  if (!usuario) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  // Atualiza a senha do usuário
  usuario.senha = novaSenha;

  // Retorna a resposta com a mensagem de sucesso
  return res.json({ message: 'Senha alterada com sucesso', usuario });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
