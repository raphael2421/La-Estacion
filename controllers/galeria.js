const fechaMX = require('../utils/fechaMX');

//@name:      Galeria
//@route:     /vive-la-estacion
//@access:    Public 
exports.renderGaleria = async (req, res, next) => {
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
      res.cookie('refid', refid, options).status(200).render('galeria', {
         path: '/vive-la-estacion',
         page: 'Vive la estación',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || ''
      });
    }
      else{
         res.status(200).render('galeria', {
            path: '/vive-la-estacion',
            page: 'Vive la estación',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || ''
         });
      }

   
   
} // renderGaleria end...