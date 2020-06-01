import express from 'express';

const app = express();

app.get('/users',(request,response) => {
    //request: utilizado para obter dados sobre nossa requisição.
    //response: retorna uma resposta ao navegador/brownser ou outra aplicação que estiver consumindo essa mesma rota.

    console.log('Listagem de usuários!');

    //JSON

    response.json([
        'Victor',
        'Frank',
        'Daniel',
        'Jean',
        'Diego'
    ]);

});


app.listen(3333);