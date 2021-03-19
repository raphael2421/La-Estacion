//@name:      ubicación
//@route:     /ubicacion
//@access:    Public 
exports.renderUbicacion = async (req, res, next) => {

   res.status(200).render('ubicacion', {
      path: 'ubicacion'
   });
   
} // renderUbicacion end...

