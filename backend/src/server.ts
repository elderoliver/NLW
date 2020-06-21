import express, { request, response } from 'express';
import cors from 'cors'; 
import routes from './routes';
import path from 'path'; 
import { errors } from 'celebrate'; 

const app = express();
app.use(cors()); 
app.use(express.json()); 
app.use(routes); 
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads'))); 

app.use(errors()); 

app.listen(3333); 

/* const users = [
    'Diego','Cleiton','Robson','Elder'
]; 

app.get('/users',(request,response) => {
    const search = String(request.query.search); 
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users; 
    response.json(filteredUsers);
}); 

app.get('/users/:id',(request,response) => {
    const id = Number(request.params.id); 
    const user = users[id];
    return response.json(user); 
}); 


app.post('/users',(request,response) => {
    
    const data = request.body;
    return response.json(data); 
});  */


// GET: BUSCAR UMA OU MAIS INFORMAÇÕES

// POST: CRIAR UMA NOVA INFORMAÇÃO NO BACKEND

// PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE

// DELETE: REMOVER UMA INFORMAÇÃO

//Resques Param: parametros que vem na própria rota que identifica um recurso. 
//Query Param: Parametros geralmente opcionais para filtros e páginação. 
//Resquest Body: Parametros para criação/atualização de informações. 

