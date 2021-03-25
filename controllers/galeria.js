const fechaMX = require('../utils/fechaMX');

//@name:      Galeria
//@route:     /vive-la-estacion
//@access:    Public 
exports.renderGaleria = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('galeria', {
      path: 'vive-la-estacion',
      page: 'Galería',
      fechaMX: await fechaMX(),
   });
} // renderGaleria end...