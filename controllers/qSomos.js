//@name:      Quienes somos
//@route:     /quienes-somos
//@access:    Public 
exports.renderQsomos = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('qSomos', {
      path: 'quienes-somos'
   });
} // renderQsomos end...