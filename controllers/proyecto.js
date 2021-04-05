const fechaMX = require('../utils/fechaMX');

//@name:      Proyecto
//@route:     /proyecto
//@access:    Public 
exports.renderProyecto = async (req, res, next) => {
   //comienza aquí
   console.log(req.query._refID || '');
   
   res.status(200).render('proyecto', {
      path: '/proyecto',
      page: 'Proyecto',
      fechaMX: await fechaMX(),
      _refID: req.query._refID || '',
      _refURL: req.headers.referer || ''
   });
} // renderProyecto end...