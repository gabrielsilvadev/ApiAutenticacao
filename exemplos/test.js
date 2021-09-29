const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaDeCadastro','root',' ',{
    host:'localhost',
    dialect:'sqlite',
    
});
const  Postagem = sequelize.define('postagens',{
    title:{
        type: Sequelize.STRING,

    },
    conteudo:{
        type:Sequelize.TEXT
    }
})
Postagem.sync({force:true})

sequelize.authenticate().then(()=>{
    console.log('conectado com sucesso')
}).catch((err)=>{
    console.log(`falha ${err}`)
})