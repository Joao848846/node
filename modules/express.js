const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.status(200).send("<h1>Usando o express</h1>" );
});

app.get('/users', (req, res) => {
   
        const users = [
            {
                name: 'Joao Victor',
                email: 'joao@victor.com',
                senha: '123456'
            },
        ];
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com o express na porta ${port}!`));

