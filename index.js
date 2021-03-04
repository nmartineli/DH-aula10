const express = require('express');
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

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})