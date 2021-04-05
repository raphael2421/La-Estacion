const fechaMX = require('../utils/fechaMX');

//@name:      Aviso de Privacidad
//@route:     /aviso-de-privacidad
//@access:    Public 
exports.renderPrivacidad = async (req, res, next) => {
   //comienza aquí
   console.log(req.query._refID || '');
   
   res.status(200).render('privacidad', {
      path: '/aviso-de-privacidad',
      page: 'Aviso de Privacidad',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
} // renderPrivacidad end... 