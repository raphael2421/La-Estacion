const fechaMX = require('../utils/fechaMX');

//@name:      ubicación
//@route:     /ubicacion
//@access:    Public 
exports.renderUbicacion = async (req, res, next) => {
   console.log(req.query._refID || '');
   
   res.status(200).render('ubicacion', {
      path: '/ubicacion',
      page: 'Ubicación',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
   
} // renderUbicacion end...