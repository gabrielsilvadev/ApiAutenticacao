const express = require('express');
const routes = express.Router();
const createCadastro= require('./controller/controllerCliente');
const session = require('express-session')
const flash = require('connect-flash')
const middleware = require('./config/middleware')
routes.post('/create',createCadastro.create);
routes.use(session)
routes.use(flash)
routes.use(middleware)
routes.get('/usuario',createCadastro.index);
routes.put('/update/:id',createCadastro.upgrade)
routes.delete('/delete/:id',createCadastro.delete)
routes.get('/search/:id',createCadastro.search)
module.exports = routes