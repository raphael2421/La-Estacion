const fechaMX = require('../utils/fechaMX');

//@name:      Galeria
//@route:     /vive-la-estacion
//@access:    Public 
exports.renderGaleria = async (req, res, next) => {
   //comienza aquí
   console.log(req.query._refID || '');
   
   res.status(200).render('galeria', {
      path: '/vive-la-estacion',
      page: 'Galería',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
} // renderGaleria end...