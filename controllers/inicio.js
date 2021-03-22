const fechaMX = require('../utils/fechaMX');

//@name:      inicio
//@route:     /
//@access:    Public 
exports.renderInicio = async (req, res, next) => {
   
   res.status(200).render('inicio', {
      path: '/',
      fechaMX: await fechaMX(),
   })
} // renderInicio end...