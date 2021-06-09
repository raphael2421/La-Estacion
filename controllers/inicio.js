const fechaMX = require('../utils/fechaMX');
const enviarCorreo = require('../utils/enviarCorreo');
const FormaContacto = require('../models/FormaContacto');

//@name:      inicio
//@route:     /
//@method     GET
//@access:    Public 
exports.renderInicio = async (req, res, next) => {
   
   // lang cookie
   let lang = req.params.lang || req.cookies.lang;
   if (Object.is(undefined, lang)) {
      lang = 'es-MX';
   };
   // fecha 
   const now = new Date();
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1100)),
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production' ? true : false,
   };
   // res

      res.status(200).render('inicio', {
         path: '/',
         page: 'Inicio',
         fechaMX: await fechaMX(),
         lastURL: req.headers.referer || ''
      });

} // renderInicio end...


//@name:      Captura ID, URL de referidos y lenguage
//@route:     /ref/:id-:lang
//@method:    GET
//@access:    Public
exports.captureRefs = async (req, res, next) => {
  // lang cookie
   let lang = req.params.lang || req.cookies.lang;
   if (Object.is(undefined, lang)) {
      lang = 'es-MX';
   };
   
   let refID = req.params.id;
   // fecha 
   const now = new Date();
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production' ? true : false,
   };

   res.cookie('refid', refID, options)
   .cookie('refurl', req.headers.referer, options)
      .cookie('lang', lang, options)
      .status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      fechaMX: await fechaMX(),
      _refID: refID || '',
      lastURL: req.headers.referer || ''
   });
} // captureRefs end...

//@name:      Forma de contacto
//@route:     /
//@method:    POST
//@access:    Public
exports.formaDeContacto = async (req, res, next) => {
   console.log(req.body);
   
   const paramsObj = req.body;
   enviarCorreo(paramsObj);
   
   // crear entrada en mongodb con formulario
   const ticket = await FormaContacto.create(req.body);
   console.log(ticket);

   // render view
   res.status(200).render('inicio', {
      path: '/',
      page: 'Inicio',
      msjForma: 'Tu solicitud fue enviada',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      lastURL: req.headers.referer || ''
   });
} // formaDeContacto end...