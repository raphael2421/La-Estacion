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
      _refID: req.params._refID || '',
      _refURL: req.headers.referer || ''
   });


} // renderInicio end...




//@name:      Captura Id de referido
//@route:     /_refID
//@method:    GET
//@access:    Public
exports.refID = async (req, res, next) => {
   
   // console.log(req.params._refID);
   // render view
   res.status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      fechaMX: await fechaMX(),
      _refID: req.params._refID || '',
      _refURL: req.headers.referer || ''
   });
   
} // refID end...




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
      fechaMX: await fechaMX(),
      _refID: req.params._refID || '',
      _refURL: req.headers.referer || ''
   });
   
} // formaDeContacto end...