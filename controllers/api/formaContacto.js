const asyncHandler = require('../../middleware/asyncHandler');
const FormaContacto = require('../../models/FormaContacto');

//@name:      Forma de cintacto
//@route:     /forma_contacto
//@method:    GET
//@access:    Public
exports.allForms = async (req, res, next) => {
   //comienza aquí
   // Query
   let query = FormaContacto.find();
   // paginación
   const total_docs = await FormaContacto.countDocuments();
   let page = parseInt(req.query.page) || 1;
   let per_page = parseInt(req.query.per_page) || 10;

   if (page <= 0) {
      page = 1
   }
   if (per_page > 100) {
      per_page = 10
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

   // res.status(200).json({
   //    success: true,
   //    total_resultados: total_docs,
   //    por_pagina: cForms.length,
   //    pagina: page,
   //    total_paginas: total_pages,
   //    data: cForms
   // });
   res.status(200).json(
   cForms
   );

} // allForms end...



//////////////////////////////
// @desc     Get all cForms
// @route    GET /api/v1/cForms
// @access   Private
exports.allcForms = asyncHandler(async (req, res, next) => {
   // Query
   let query = FormaContacto.find();
   // paginación
   const total_docs = await FormaContacto.countDocuments();
   let page = parseInt(req.query.page) || 1;
   let per_page = parseInt(req.query.per_page) || 10;

   if (page <= 0) {
      page = 1
   }
   if (per_page > 100) {
      per_page = 10
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

});
