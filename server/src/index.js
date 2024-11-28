import fileUpload from 'express-fileupload';
import express from 'express';
import cors from 'cors';

const app = express();
const porta = 5000;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Funcionando :)')
});