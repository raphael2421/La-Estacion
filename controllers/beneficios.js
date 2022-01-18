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
         structuredData: `<script type='application/ld+json'>
{
    "@context": "http://schema.org/",
    "@type": "NewsArticle",
    "headline": "Day of the Dead Celebration",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.laestacionresidence.mx/"
    },
    "image": {
        "@type": "ImageObject",
        "url": "https://www.laestacionresidence.mx/media/blog/day-of-the-dead-san-miguel-de-allende.jpg",
        "height": 574,
        "width": 960
    },
    "publisher": {
        "@type": "Organization",
        "name": "Royal Home",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.laestacionresidence.mx/media/la-estacion-logo-royal-home-mexico-plaza.svg",
            "height": 60,
            "width": 60
        }
    },
    "datePublished": "2021-11-02",
    "dateModified": "2021-11-02",
    "description": "San Miguel de Allende, a colonial-era city in Mexico’s central highlands, is known for its baroque Spanish architecture, thriving arts scene, and cultural festivals. In the city’s historic cobblestoned center lies the neo-Gothic church Parroquia de San Miguel Arcángel"
}
</script>`,
         snippet: `<!-- Primary Meta Tags -->
<title>Tu nuevo departamento en San Miguel de Allende</title>
<meta name="title" content="Tu nuevo departamento en San Miguel de Allende">
<meta name="description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios de tener una casa dentro de San Miguel de Allende.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="og:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="og:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios de tener una casa dentro de San Miguel de Allende.">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="twitter:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="twitter:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios de tener una casa dentro de San Miguel de Allende.">
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
<meta name="description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios de tener una casa dentro de San Miguel de Allende.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="og:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="og:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios de tener una casa dentro de San Miguel de Allende.">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.laestacionresidence.mx/beneficios">
<meta property="twitter:title" content="Tu nuevo departamento en San Miguel de Allende">
<meta property="twitter:description" content="La Estación, desarrollo exclusivo de departamentos con alta plusvalía. Descubre los beneficios de tener una casa dentro de San Miguel de Allende.">
<meta property="twitter:image" content="https://www.laestacionresidence.mx/media/blog/san-miguel-de-allende-beneficios.jpg">`
         });
      }


} // renderBeneficios end...