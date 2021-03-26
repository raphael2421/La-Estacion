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
   console.log(req.body);

   const paramsObj = req.body;

   enviarCorreo(paramsObj);
   // render view
   res.status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      msjForma: 'Tu solicitud fue enviada',
      fechaMX: await fechaMX()
   });
   
} // formaDeContacto end...