const fechaMX = require('../utils/fechaMX');

//@name:      Beneficios
//@route:     /beneficios
//@access:    Public 
exports.renderBeneficios = async (req, res, next) => {
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
      res.cookie('refid', refid, options)
      .status(200)
      .render('beneficios', {
         path: '/beneficios',
         page: 'Beneficios',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>Tu nuevo departamento en San Miguel de Allende</title>
<meta name="title" content="Tu nuevo departamento en San Miguel de Allende">
<meta name="description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios detener una casa dentro de San Miguel de Allende.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="og:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="og:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios detener una casa dentro de San Miguel de Allende.">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="twitter:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="twitter:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios detener una casa dentro de San Miguel de Allende.">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/blog/san-miguel-de-allende-beneficios.jpg">`
      });
    }
      else{
         res.status(200).render('beneficios', {
            path: '/beneficios',
            page: 'Beneficios',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || '',
            snippet: `<!-- Primary Meta Tags -->
<title>Tu nuevo departamento en San Miguel de Allende</title>
<meta name="title" content="Tu nuevo departamento en San Miguel de Allende">
<meta name="description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios detener una casa dentro de San Miguel de Allende.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="og:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="og:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios detener una casa dentro de San Miguel de Allende.">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="twitter:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="twitter:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios detener una casa dentro de San Miguel de Allende.">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/blog/san-miguel-de-allende-beneficios.jpg">`
         });
      }


} // renderBeneficios end...