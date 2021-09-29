
const express = require('express');

const  app = express();

app.get('/',function(req,res){
    res.send('seja bem vindo')
});

app.get('/sobre',function(req,res){
    res.send('minha pagina sobre')
})
app.get('/name/:nome/:cargo',function(req,res){
    response.send(`Ola ${req.params.nome} e ${req.params.cargo}`)
});

app.listen(8080,function(){
    console.log('rodando')
})
