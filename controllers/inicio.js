//@name:      inicio
//@route:     /

const { render } = require("ejs")

//@access:    Public 
exports.renderInicio = async (req, res, next) => {
   

   function fecha() {
      utc = new Date();
      toLocal = new Date(utc.setHours(utc.getHours() - 6));
      // console.log(toLocal.toISOString().slice(0, 19));
      // console.log(utc.toISOString().slice(0, 19));
      return toLocal.toISOString().slice(0, 10);
   }

   //comienza aquí
   res.status(200).render('inicio', {
      path: '/',
      fechaMX: fecha(),
   })
} // renderInicio end...