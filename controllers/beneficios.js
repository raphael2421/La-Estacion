const fechaMX = require('../utils/fechaMX');

//@name:      Beneficios
//@route:     /beneficios
//@access:    Public 
exports.renderBeneficios = async (req, res, next) => {
   //comienza aquí
   console.log(req.query._refID || '');

   res.status(200).render('beneficios', {
      path: '/beneficios',
      page: 'Beneficios',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
} // renderBeneficios end...