//@name:      Beneficios
//@route:     /beneficios
//@access:    Public 
exports.renderBeneficios = async (req, res, next) => {
   //comienza aquí
   res.status(200).render('beneficios', {
      path: 'beneficios'
   });
} // renderBeneficios end...