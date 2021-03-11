//@name:      inicio
//@route:     /

const { render } = require("ejs")

//@access:    Public 
exports.renderInicio = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('inicio', {
      path: '/',
      
   })
} // renderInicio end...