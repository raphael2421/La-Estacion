const fechaMX = require('../utils/fechaMX');
const enviarCorreo = require('../utils/enviarCorreo');
const FormaContacto = require('../models/FormaContacto');
const Referal = require('../models/Referal');

const slidesContent = [
   {
      title: '',
      small: 'video.webp',
      large: 'video-XL.webp'
   },

   {
      title: '',
      small: 'departamento.webp',
      large: 'departamento-XL.webp'
   },
   {
      title: '',
      small: 'experiencias.webp',
      large: 'experiencias-XL.webp'
   },
   {
      title: '',
      small: 'rooftop.webp',
      large: 'rooftop-XL.webp'
   },
   {
      title: '',
      small: 'alberca.webp',
      large: 'alberca-XL.webp'
   },
   {
      title: '',
      small: 'bar.webp',
      large: 'bar-XL.webp'
   },
   {
      title: '',
      small: 'salon-de-juegos.webp',
      large: 'salon-de-juegos-XL.webp'
   },
];

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

   // confirmacion de evento
   let confirmation;
   Object.is(req.query.confirmation, undefined) ? confirmation = false : confirmation = true;

   // res
      res.status(200).render('inicio', {
         path: '/',
         page: 'La estación hotel & residence',
         fechaMX: await fechaMX(),
         data: slidesContent,
         confirmation,
         lastURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>La Estación hotel & residence</title>
<meta name="title" content="La Estación hotel & residence">
<meta name="description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/">
<meta property="og:title" content="La Estación hotel & residence">
<meta property="og:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/">
<meta property="twitter:title" content="La Estación hotel & residence">
<meta property="twitter:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">`
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
   const referal = await Referal.findOne({ codigo: refID });
   if (!referal) {
      // console.log('Referal-ID invalido');
      // return next(new ErrorResponse(`No se encontró la razón social con ID: ${req.params.id}`, 404));
      res.cookie('refid', refID, options)
         .cookie('refurl', req.headers.referer, options)
         .cookie('lang', lang, options)
         .status(200).render('inicio', {
            path: '/',
            page: 'La estación hotel & residence',
            fechaMX: await fechaMX(),
            _refID: refID || '',
            data: slidesContent,
            lastURL: req.headers.referer || '',
            snippet: `<!-- Primary Meta Tags -->
<title>La Estación hotel & residence</title>
<meta name="title" content="La Estación hotel & residence">
<meta name="description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/">
<meta property="og:title" content="La Estación hotel & residence">
<meta property="og:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/">
<meta property="twitter:title" content="La Estación hotel & residence">
<meta property="twitter:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">`
         });
   } // if END

   req.body.visitas = referal.visitas
   req.body.visitas.push(new Date().toISOString());

   referalUpdated = await Referal.findByIdAndUpdate(referal._id, req.body, {
      new: true,
      runValidators: true
   });

   res.cookie('refid', refID, options)
   .cookie('refurl', req.headers.referer, options)
      .cookie('lang', lang, options)
      .status(200).render('inicio', {
      path: '/',
      page: 'La estación hotel & residence',
      fechaMX: await fechaMX(),
      _refID: refID || '',
      data: slidesContent,
      lastURL: req.headers.referer || '',
      snippet: `<!-- Primary Meta Tags -->
<title>La Estación hotel & residence</title>
<meta name="title" content="La Estación hotel & residence">
<meta name="description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/">
<meta property="og:title" content="La Estación hotel & residence">
<meta property="og:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/">
<meta property="twitter:title" content="La Estación hotel & residence">
<meta property="twitter:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">`
   });
} // captureRefs end...

//@name:      Forma de contacto
//@route:     /
//@method:    POST
//@access:    Public
exports.formaDeContacto = async (req, res, next) => {
   console.log(req.body);
   const paramsObj = req.body;

   // encontrar entrada en mongodb con formulario
   const lead = await FormaContacto.findOne({
      $or:[
         {correo: paramsObj.correo},
         {telefono: paramsObj.telefono}
      ]
   });

   //refid
   const refid = req.cookies.refid;
   // req.body.refID = refid;
   paramsObj.refID = refid;
   // ********+++
   // console.log('Object.is null:',Object.is(lead, null));
   try {
      // crear entrada en mongodb con formulario
      if(Object.is(lead, null)) {
         enviarCorreo(paramsObj);
         await FormaContacto.create(paramsObj);
      }
      ////// 
      if (Object.is(refid, undefined)) {
         console.log('sin referal');
      } else {
         const reflink = await Referal.findOne({ codigo: refid })
         // console.log('reflink', reflink);
         reflink.conversiones.push(new Date().toISOString());

         await Referal.findOneAndUpdate({ codigo: refid }, reflink, {
            new: true,
            runValidators: true
         });
      }

      // render view
      res.status(200).render('inicio', {
         path: '/',
         page: 'La estación hotel & residence',
         msjForma: 'Tu solicitud fue enviada',
         fechaMX: await fechaMX(),
         _refID: refid || '',
         data: slidesContent,
         lastURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>La Estación hotel & residence</title>
<meta name="title" content="La Estación hotel & residence">
<meta name="description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/">
<meta property="og:title" content="La Estación hotel & residence">
<meta property="og:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/">
<meta property="twitter:title" content="La Estación hotel & residence">
<meta property="twitter:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">`
      });

   } catch (error) {
      console.log(error);

      // render view
      res.status(200).render('inicio', {
         path: '/',
         page: 'La estación hotel & residence',
         msjForma: 'Tu solicitud fue enviada',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         data: slidesContent,
         lastURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>La Estación hotel & residence</title>
<meta name="title" content="La Estación hotel & residence">
<meta name="description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/">
<meta property="og:title" content="La Estación hotel & residence">
<meta property="og:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/">
<meta property="twitter:title" content="La Estación hotel & residence">
<meta property="twitter:description" content="venta de Departamentos con ubicación privilgiada a 5 minutos del centro, haz de San Miguel de Allende tu nueva casa">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-inicio/la-estacion-hotel-and-residence.jpg">`
      });
   }

   // ***********


} // formaDeContacto end...