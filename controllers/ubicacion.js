const fechaMX = require('../utils/fechaMX');

//@name:      ubicación
//@route:     /ubicacion
//@access:    Public 
exports.renderUbicacion = async (req, res, next) => {
   // console.log(req.query._refID || '');

   //refid
   const refid = req.query._refID;
   // fecha 
   const now = new Date()
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      secure: true
   };
   // res
   if (!Object.is(refid, undefined)) {
      res.cookie('refid', refid, options).setHeader(
         'Content-Security-Policy',
         "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'; script-src 'https://embed.waze.com'"
      ).status(200).render('ubicacion', {
         path: '/ubicacion',
         page: 'Ubicación',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || ''
      });
   }
      else{
      res.status(200).setHeader(
         'Content-Security-Policy',
         "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'; script-src 'https://embed.waze.com'"
      ).render('ubicacion', {
            path: '/ubicacion',
            page: 'Ubicación',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || ''
         });
      }
} // renderUbicacion end...


