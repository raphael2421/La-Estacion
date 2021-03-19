// express
const router = require('express').Router();
// DeStructuring controller
const { renderUbicacion } = require('../controllers/ubicacion');

router.route('/').get(renderUbicacion);

// export
module.exports = router;
