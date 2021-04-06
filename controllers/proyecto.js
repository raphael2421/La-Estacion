const fechaMX = require('../utils/fechaMX');

//@name:      Proyecto
//@route:     /proyecto
//@access:    Public 
exports.renderProyecto = async (req, res, next) => {
   //comienza aquí
   // console.log(req.query._refID || '');

   //refid
   const refid = req.query._refID;
   // fecha 
   const now = new Date()
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      // secure: true
   };
   // res
   if (!Object.is(refid, undefined)) {
      res.cookie('refid', refid, options).status(200).render('proyecto', {
         path: '/proyecto',
         page: 'Proyecto',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || ''
      });
    }
      else{
         res.status(200).render('proyecto', {
            path: '/proyecto',
            page: 'Proyecto',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || ''
         });
      }

} // renderProyecto end...