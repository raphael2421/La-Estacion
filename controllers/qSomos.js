const fechaMX = require('../utils/fechaMX');

//@name:      Quienes somos
//@route:     /quienes-somos
//@access:    Public 
exports.renderQsomos = async (req, res, next) => {
   //comienza aquí
   console.log(req.query._refID || '');
   
   res.status(200).render('qSomos', {
      path: '/quienes-somos',
      page: '¿Quienes somos?',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
} // renderQsomos end... 