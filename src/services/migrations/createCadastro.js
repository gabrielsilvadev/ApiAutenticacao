const Sequelize = require('sequelize')

const conection = require('../connection')

const  Cadastro = conection.define('Cadastro',{
    nome:{
        type: Sequelize.STRING,

    },
    cidade:{
        type:Sequelize.TEXT
    },
     repositorio:{
        type:Sequelize.ARRAY(Sequelize.TEXT)
    }
})

module.exports=Cadastro