const fechaMX = require('../utils/fechaMX');
const enviarCorreo = require('../utils/enviarCorreo');
const FormaContacto = require('../models/FormaContacto');

//@name:      inicio
//@route:     /
//@method     GET
//@access:    Public 
exports.renderInicio = async (req, res, next) => {
   // render view
   console.log(req.query._refID || '');
   
   res.status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });


} // renderInicio end...


//@name:      Forma de contacto
//@route:     /
//@method:    POST
//@access:    Public
exports.formaDeContacto = async (req, res, next) => {
   console.log(req.body);
   
   // crear entrada en mongodb con formulario
   const ticket = await FormaContacto.create(req.body);

   const paramsObj = req.body;

   enviarCorreo(paramsObj);
   // render view
   res.status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      msjForma: 'Tu solicitud fue enviada',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
   
} // formaDeContacto end...