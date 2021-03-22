const fechaMX = require('../utils/fechaMX');

//@name:      Quienes somos
//@route:     /quienes-somos
//@access:    Public 
exports.renderQsomos = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('qSomos', {
      path: 'quienes-somos',
      fechaMX: await fechaMX(),
   });
} // renderQsomos end... 