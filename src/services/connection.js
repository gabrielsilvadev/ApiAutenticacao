const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    storage:'database.db',
    dialect:'sqlite'
});

sequelize.authenticate().then(()=>{
    console.log('conectado com sucesso')
}).catch((err)=>{
    console.log(`falha ${err}`)
})


module.exports = sequelize;