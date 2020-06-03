import express from 'express';

import routes from './routes';

import path from 'path';


import cors from 'cors';

const app = express();


app.use(cors());

app.use(express.json());

// Rota: endereço completo da requisição.
// Recurso: Qual entidade estamos acessando do sistema.


//GET: buscar uma ou mais informações do back-end.
//POST: cria uma nova informação no back-end.
//PUT: atualiza uma informação existente no back-end.
//DELETE: Remover uma informação do back-end.



//Request Params: parâmetros que vem na própria rota que identificam um recurso.
//Query Param:  parâmetros que vem na própria rota geralmente opcionais para filtros, páginação.
//Request body: Parâmetros para criação/atualização de informações.


//request: utilizado para obter dados sobre nossa requisição.
//response: retorna uma resposta ao navegador/brownser ou outra aplicação que estiver consumindo essa mesma rota.


app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')));


app.listen(3333);