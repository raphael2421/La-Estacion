const fechaMX = require('../utils/fechaMX');
const enviarCorreo = require('../utils/enviarCorreo');
const enviarThanks = require('../utils/enviarThanks');
const Evento = require('../models/Evento');
const Referal = require('../models/Referal');

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

      res.status(200).render('evento', {
         path: '/',
         page: 'Evento',
         fechaMX: await fechaMX(),
         lastURL: req.headers.referer || ''
      });

} // renderInicio end...


//@name:      Captura ID, URL de referidos y lenguage
//@route:     /ref/:id-:lang
//@method:    GET
//@access:    Public
exports.captureRefs = async (req, res, next) => {
   // fecha 
   const now = new Date();
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production' ? true : false,
   };
  // lang cookie
   let lang = req.params.lang || req.cookies.lang;
   if (Object.is(undefined, lang)) {
      lang = 'es-MX';
   };

   
   let refID = req.params.id;

   // capturar visitas
   const referal = await Referal.findById(refID);
   if (!referal) {
      console.log('Referal-ID invalido');
      // return next(new ErrorResponse(`No se encontró la razón social con ID: ${req.params.id}`, 404));
      res.cookie('refid', refID, options)
         .cookie('refurl', req.headers.referer, options)
         .cookie('lang', lang, options)
         .status(200).render('evento', {
            path: '/',
            page: 'Evento',
            fechaMX: await fechaMX(),
            _refID: refID || '',
            lastURL: req.headers.referer || ''
         });
   } // if END

   req.body.visitas = referal.visitas
   req.body.visitas.push(new Date().toISOString());

   referalUpdated = await Referal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
   });

   res.cookie('refid', refID, options)
   .cookie('refurl', req.headers.referer, options)
      .cookie('lang', lang, options)
      .status(200).render('evento', {
      path: '/',
      page: 'Evento',
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
   try {

      console.log(req.body);

      const paramsObj = req.body;
      enviarThanks(paramsObj);
      // enviarCorreo(paramsObj);

      // crear entrada en mongodb con formulario
      const ticket = await Evento.create(req.body);
      console.log(ticket);

      // render view
      res.status(200).render('evento', {
         path: '/evento',
         page: 'Evento',
         msjForma: 'Registro Creado',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         lastURL: req.headers.referer || ''
      });
      
   } catch (error) {
      console.log(error);
      
      // render view
      res.status(200).render('evento', {
         path: '/evento',
         page: 'Evento',
         msjForma: 'Algo salió mal intenta otra vez',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         lastURL: req.headers.referer || ''
      });
      
   }

} // formaDeContacto end...