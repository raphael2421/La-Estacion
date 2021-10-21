const fechaMX = require('../utils/fechaMX');

//@name:      ubicación
//@route:     /ubicacion
//@access:    Public 
exports.renderUbicacion = async (req, res, next) => {
   // console.log(req.query._refID || '');

   //refid
   const refid = req.query._refID;
   // fecha 
   const now = new Date()
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      secure: true
   };
   // res
   if (!Object.is(refid, undefined)) {
      res.status(200).cookie('refid', refid, options).render('ubicacion', {
         path: '/ubicacion',
         page: 'Ubicación',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>Ubicación privilegiada en la primera sección de la ciudad</title>
<meta name="title" content="Ubicación privilegiada en la primera sección de la ciudad">
<meta name="description" content="La Estación hotel & residence, se encuentra a tan solo 5 minutos del centro de la ciudad de San Miguel de Allende, tu departamento con fácil acceso y movilidad">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/ubicacion">
<meta property="og:title" content="Ubicación privilegiada en la primera sección de la ciudad">
<meta property="og:description" content="La Estación hotel & residence, se encuentra a tan solo 5 minutos del centro de la ciudad de San Miguel de Allende, tu departamento con fácil acceso y movilidad">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/ubicacion">
<meta property="twitter:title" content="Ubicación privilegiada en la primera sección de la ciudad">
<meta property="twitter:description" content="La Estación hotel & residence, se encuentra a tan solo 5 minutos del centro de la ciudad de San Miguel de Allende, tu departamento con fácil acceso y movilidad">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/ubicacion/la-estacion-san-miguel-de-allende.jpg">`
      });
   }
   else {
      res.status(200).render('ubicacion', {
         path: '/ubicacion',
         page: 'Ubicación',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>Ubicación privilegiada en la primera sección de la ciudad</title>
<meta name="title" content="Ubicación privilegiada en la primera sección de la ciudad">
<meta name="description" content="La Estación hotel & residence, se encuentra a tan solo 5 minutos del centro de la ciudad de San Miguel de Allende, tu departamento con fácil acceso y movilidad">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/ubicacion">
<meta property="og:title" content="Ubicación privilegiada en la primera sección de la ciudad">
<meta property="og:description" content="La Estación hotel & residence, se encuentra a tan solo 5 minutos del centro de la ciudad de San Miguel de Allende, tu departamento con fácil acceso y movilidad">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/ubicacion">
<meta property="twitter:title" content="Ubicación privilegiada en la primera sección de la ciudad">
<meta property="twitter:description" content="La Estación hotel & residence, se encuentra a tan solo 5 minutos del centro de la ciudad de San Miguel de Allende, tu departamento con fácil acceso y movilidad">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/ubicacion/la-estacion-san-miguel-de-allende.jpg">`
      });
   }
} // renderUbicacion end...

