const flash = require('connect-flash')

module.exports = (req,res,next)=>{
   res.locals.meseger = req.flash("sucesso")
   res.locals.error = req.flash('erro')
}