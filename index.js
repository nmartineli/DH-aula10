const express = require('express');
const path = require('path');
const { send } = require('process');
const app = express();

const listaUsuarios = [
    'João',
    'Maria',
    'Carlos',
    'Rafaela'
]

// Route Params
//app.get('/:usuario', (req, res) => {
//    const { usuario } = req.params;
//    return res.send(`Hello world! ${usuario}`);
//})

// Query Params
// http://localhost:3000/usuarios?nome=Maria

app.get('/usuarios', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = listaUsuarios.filter(i => i.includes(nome || ""));
    return res.json(listaRetorno); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'));
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})