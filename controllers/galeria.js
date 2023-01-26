const fechaMX = require('../utils/fechaMX');

//@name:      Galeria
//@route:     /vive-la-estacion
//@access:    Public 
exports.renderGaleria = async (req, res, next) => {
   //comienza aquí
   // console.log(req.query._refID || '');


   //refid
   const refid = req.query._refID;
   // fecha 
   const now = new Date()
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      // secure: true
   };
   // res
   if (!Object.is(refid, undefined)) {
      res.cookie('refid', refid, options).status(200).render('galeria', {
         path: '/vive-la-estacion',
         page: 'Vive la estación',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>Descubriendo tu nuevo hogar y departamento</title>
<meta name="title" content="Descubriendo tu nuevo hogar y departamento">
<meta name="description" content="El espacio donde te enamorarás de San Miguel de Allende y tu nuevo departamento, galería de imágenes de amenidades y lugares por conocer">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/vive-la-estacion">
<meta property="og:title" content="Descubriendo tu nuevo hogar y departamento">
<meta property="og:description" content="El espacio donde te enamorarás de San Miguel de Allende y tu nuevo departamento, galería de imágenes de amenidades y lugares por conocer">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/vive-la-estacion">
<meta property="twitter:title" content="Descubriendo tu nuevo hogar y departamento">
<meta property="twitter:description" content="El espacio donde te enamorarás de San Miguel de Allende y tu nuevo departamento, galería de imágenes de amenidades y lugares por conocer">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/galeria/departamentos-alberca.jpg">`
      });
    }
      else{
         res.status(200).render('galeria', {
            path: '/vive-la-estacion',
            page: 'Vive la estación',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || '',
            snippet: `<!-- Primary Meta Tags -->
<title>Descubriendo tu nuevo hogar y departamento</title>
<meta name="title" content="Descubriendo tu nuevo hogar y departamento">
<meta name="description" content="El espacio donde te enamorarás de San Miguel de Allende y tu nuevo departamento, galería de imágenes de amenidades y lugares por conocer">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/vive-la-estacion">
<meta property="og:title" content="Descubriendo tu nuevo hogar y departamento">
<meta property="og:description" content="El espacio donde te enamorarás de San Miguel de Allende y tu nuevo departamento, galería de imágenes de amenidades y lugares por conocer">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/vive-la-estacion">
<meta property="twitter:title" content="Descubriendo tu nuevo hogar y departamento">
<meta property="twitter:description" content="El espacio donde te enamorarás de San Miguel de Allende y tu nuevo departamento, galería de imágenes de amenidades y lugares por conocer">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/galeria/departamentos-alberca.jpg">`
         });
      }

   
   
} // renderGaleria end...