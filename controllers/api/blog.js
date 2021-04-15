const asyncHandler = require('../../middleware/asyncHandler');
const Post = require('../../models/Post');
// tiny png
const tinify = require("tinify");
tinify.key = process.env.TINY_PNG;
/// middleware optimiza img con tinypng
const optimizaImagen = require('../../middleware/tiny_png');

//@name:      Forma de cintacto
//@route:     /forma_contacto
//@method:    GET
//@access:    Public
exports.allPosts = async (req, res, next) => {
   //comienza aquí
   // Query
   let query = Post.find();
   // paginación
   const total_docs = await Post.countDocuments();
   let page = parseInt(req.query.page) || 1;
   let per_page = parseInt(req.query.per_page) || 1000000;

   if (page <= 0) {
      page = 1
   }
   if (per_page > 900000) {
      per_page = 1000000
   }

   const total_pages = Math.ceil((total_docs / per_page));

   if (page >= total_pages) {
      page = total_pages
   }

   if (page === 0) page++
   const skip = (page - 1) * per_page;
   // query con paginación
   query.skip(skip).limit(per_page);

   // sorting
   let sort = '-';

   if (req.query.asc === '') sort = '';

   let sort_field = req.query.sort_field || '_date'
   // query con sorting
   query.sort(sort + sort_field)

   // filtrado 'Select'
   let select = req.query.select;
   // query con select
   query.select(select);

   //// exec query
   const cForms = await query;

   res.status(200).json({
      success: true,
      total_resultados: total_docs,
      por_pagina: cForms.length,
      pagina: page,
      total_paginas: total_pages,
      data: cForms
   });

   // res.status(200).json(
   // cForms
   // );

} // allForms end...



//@name:      crear Nuevo Post
//@route:     /api/v1/blog
//@method:    POST
//@access:    Private
exports.postCrear = async (req, res, next) => {

   console.log(req.body);
   // crear entrada en mongodb con formulario
   // const blogpost = await Post.create(req.body);

   // res json
   res.status(200).json({
      success: true,
      data: 'blogpost'
   });

} // formaDeContacto end...


//@name: subir imagen
//@route: /api/v1/blog/upload-img
//@method: POST
//@access: Private
exports.subirImg = async (req, res, next)=>{
   console.log(req.params)
   // let empresa = await Empresa.findById(req.params.id);

   /*
   // verifica que el usuario sea quien registro la empresa
   if (empresa.user_id.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(new ErrorResponse(`No estas autorizado`, 401));
   }
// si no hay empresa
   if (!empresa) {
      return next(new ErrorResponse(`No se encontro la razón social con ID: ${req.params.id}`, 404));
   }

   // si no suben logo
   if (!req.files) {
      return next(new ErrorResponse(`Por favor sube una imagen`, 400));
   }

   const file = req.files.image;

   // make sure is an image
   if (!(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg')) {
      return next(new ErrorResponse(`Solo se permiten archivos .jpg o .png `, 400));
   }

   // obtener la extension
   const extension = file.name.substring(file.name.lastIndexOf("."));

   // nuevo nombre del archivo
   file.name = 'logo'+extension;

   // ruta para guardar la imagen
   let path = `${process.env.FILE_UPLOAD_PATH}/${empresa._id}`;

   // TINY_PNG from buffer
   let source = tinify.fromBuffer(file.data);

   optimizaImagen(path, source, file, empresa.id, res, next);
*/
};