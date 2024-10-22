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
  const { nome, email } = req.body;
  const novoUsuario = { id: nextId++, nome, email };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Endpoint para atualizar um usuário
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const usuarioIndex = usuarios.findIndex((u) => u.id === parseInt(id));
  
  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex] = { id: parseInt(id), nome, email };
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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
