
const crypt = require('crypto')
const Cadastro = require('../services/migrations/createCadastro');
const { default: axios } = require('axios');
const { parse } = require('path');



module.exports={
     async search(request,response){
      const pesquisa = await  Cadastro.findByPk(request.params.id).then(()=>{
        response.send(pesquisa)
      }).catch((er)=>{
        response.send({messeger:'usuario nao encontrado'})
      })
     
     },
     async delete(request,response){
      const usuario = await Cadastro.findByPk(request.params.id);
      usuario.destroy()
     },
     async upgrade(request,response){
      const data = request.body
      console.log(data)
      Cadastro.update(data,{
        where:{
          id: request.params.id
        }
      }).then((data)=>{
        response.send({messeger:'atualizado com sucesso'})
       
      }).catch((error)=>{
        console.log(error)
         response.send({messeger:'error'})
       
      })
     },

     async index(request,response){
     const usuarios = await Cadastro.findAll();
     response.send(usuarios)
    
    },

    async create(request,response){
    
      try{
      Cadastro.sync()
       const {
        nome,
        cidade,
        repositorio
       } = request.body;
      
      const data = await axios.get(`https://api.github.com/users/${repositorio}/repos`)
    
      
      Cadastro.create({
          nome:nome,
          cidade:cidade,
          repositorio: await data.data.map(item=>{
         return(
         saveItem={
             name:item.name,
             description:item.description
           }
         )
       })
         })
      response.status(200).send({message:'cadastrado com sucesso'})
    }catch(e){
       response.status(500).send({message:'Falha'+e})
    }
        
  }
}