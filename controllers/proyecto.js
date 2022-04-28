const fechaMX = require('../utils/fechaMX');

const Desarrollo = require('../models/Desarrollo');
const Pagina = require('../models/Pagina')


//@name:      redirect to departamentos
//@route:     /proyecto
//@method:    GET
//@access:    Public
exports.renderProyecto = async (req, res, next) => {
   //comienza aquí
   res.status(301).set('location', '/departamentos').send();
} // renderProyecto end...



//@name:      Proyecto
//@route:     /proyecto
//@access:    Public 
exports.renderDepartamentos = async (req, res, next) => {
   //comienza aquí

   const page = await Pagina.findById('622626ac0da0f73974227557')
   .populate({
         path: "precio",
         select: "precios"
      })
   // console.log(page.precio);

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
   // res departamentos-la-estacion-san-miguel-de-allende.jpg
   if (!Object.is(refid, undefined)) {
      res.cookie('refid', refid, options).status(200).render('proyecto', {
         path: '/proyecto',
         page: 'Departamentos en San Miguel de Allende',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || '',
         data: page
      });
    }
      else{
         res.status(200).render('proyecto', {
            path: '/departamentos',
            page: 'Departamentos en San Miguel de Allende',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || '',
            data: page
         });
      }

} // renderDepartamentos end...