const fechaMX = require('../utils/fechaMX');
const enviarCorreo = require('../utils/enviarCorreo');

//@name:      inicio
//@route:     /
//@method     GET
//@access:    Public 
exports.renderInicio = async (req, res, next) => {
  
   // render view
   res.status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      fechaMX: await fechaMX(),
   });


} // renderInicio end...


//@name:      Forma de contacto
//@route:     /
//@method:    POST
//@access:    Public
exports.formaDeContacto = async (req, res, next) => {
   //comienza aquí
   
} // formaDeContacto end...