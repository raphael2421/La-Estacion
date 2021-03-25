const fechaMX = require('../utils/fechaMX');

//@name:      Proyecto
//@route:     /proyecto
//@access:    Public 
exports.renderProyecto = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('proyecto', {
      path: 'proyecto',
      page: 'Proyecto',
      fechaMX: await fechaMX(),
   });
} // renderProyecto end...