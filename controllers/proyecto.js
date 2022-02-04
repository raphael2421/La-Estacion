const fechaMX = require('../utils/fechaMX');

//@name:      redirect to departamentos
//@route:     /proyecto
//@method:    GET
//@access:    Public
exports.renderProyecto = async (req, res, next) => {
   //comienza aquí
   res.status(301).set('location', '/departamentos').send();
} // renderProyecto end...



//@name:      Proyecto
//@route:     /proyecto
//@access:    Public 
exports.renderDepartamentos = async (req, res, next) => {
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
   // res departamentos-la-estacion-san-miguel-de-allende.jpg
   if (!Object.is(refid, undefined)) {
      res.cookie('refid', refid, options).status(200).render('proyecto', {
         path: '/proyecto',
         page: 'Departamentos en San Miguel de Allende',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || '',
         snippet: `<!-- Primary Meta Tags -->
<title>Departamentos en San Miguel de Allende</title>
<meta name="title" content="Departamentos en San Miguel de Allende">
<meta name="description" content="Ubicados a 5 mins del centro de San Miguel de Allende, casas con exclusivas amenidades como: alberca, fogatero, salón de juegos, bar y gimnasio.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/departamentos">
<meta property="og:title" content="Departamentos en San Miguel de Allende">
<meta property="og:description" content="Ubicados a 5 mins del centro de San Miguel de Allende, casas con exclusivas amenidades como: alberca, fogatero, salón de juegos, bar y gimnasio.">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-proyecto/departamentos-en-san-miguel-de-allende.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/departamentos">
<meta property="twitter:title" content="Departamentos en San Miguel de Allende">
<meta property="twitter:description" content="Ubicados a 5 mins del centro de San Miguel de Allende, casas con exclusivas amenidades como: alberca, fogatero, salón de juegos, bar y gimnasio.">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-proyecto/departamentos-en-san-miguel-de-allende.jpg">`
      });
    }
      else{
         res.status(200).render('proyecto', {
            path: '/departamentos',
            page: 'Departamentos en San Miguel de Allende',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || '',
            snippet: `<!-- Primary Meta Tags -->
<title>Departamentos en San Miguel de Allende</title>
<meta name="title" content="Departamentos en San Miguel de Allende">
<meta name="description" content="Exclusivos departamentos equipados con la más alta gama de materiales de calidad, y una ubicación incomparable a 5 minutos del centro de San Miguel de Allende">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/departamentos">
<meta property="og:title" content="Departamentos en San Miguel de Allende">
<meta property="og:description" content="Exclusivos departamentos equipados con la más alta gama de materiales de calidad, y una ubicación incomparable a 5 minutos del centro de San Miguel de Allende">
<meta property="og:image" content="https://www.laestacionresidence.mx/media/slider-proyecto/departamentos-en-san-miguel-de-allende.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/departamentos">
<meta property="twitter:title" content="Departamentos en San Miguel de Allende">
<meta property="twitter:description" content="Exclusivos departamentos equipados con la más alta gama de materiales de calidad, y una ubicación incomparable a 5 minutos del centro de San Miguel de Allende">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/slider-proyecto/departamentos-en-san-miguel-de-allende.jpg">`
         });
      }

} // renderDepartamentos end...