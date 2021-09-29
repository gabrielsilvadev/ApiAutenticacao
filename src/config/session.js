const session = require('express-session')

const config = session({
    secret:'4849604edf68da88a449377f478eb91c',
    resave:true,
    saveUninitialized:true
})

module.exports=config