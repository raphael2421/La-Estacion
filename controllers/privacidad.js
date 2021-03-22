const fechaMX = require('../utils/fechaMX');

//@name:      Aviso de Privacidad
//@route:     /aviso-de-privacidad
//@access:    Public 
exports.renderPrivacidad = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('privacidad', {
      path: 'aviso-de-privacidad',
      fechaMX: await fechaMX(),
   });
} // renderPrivacidad end... 