const express = require('express'); // ou import express from 'express'; para módulos ES6
const fs = require('fs');
const app = express();
const port = 3000;

let cont = 0;
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);     // caso nao exista a pasta
        return;
    }
    if (data ==  'NaN') {       // Se estiver vazio, seta para 0
        data = '0';
    }
    cont += parseInt(data);
});

// Definir a rota GET para o caminho raiz (/)
app.get('/', (req, res) => {
    fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Print the contents of 'sample.txt' to the console
    res.send('Visistas anteriores: ' + data)
});
});

// Outro exemplo de rota GET para um caminho específico
app.get('/visitas', (req, res) => {     
    cont++;
  res.json({ message: 'Contagem de visistas: ' + cont }); // Envia um objeto JSON
  fs.writeFileSync('sample.txt', cont.toString())
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});