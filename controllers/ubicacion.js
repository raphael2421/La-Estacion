const fechaMX = require('../utils/fechaMX');

//@name:      ubicación
//@route:     /ubicacion
//@access:    Public 
exports.renderUbicacion = async (req, res, next) => {

   res.status(200).render('ubicacion', {
      path: 'ubicacion',
      fechaMX: await fechaMX(),
   });
   
} // renderUbicacion end...

