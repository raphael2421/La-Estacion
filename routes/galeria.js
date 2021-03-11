// express
const router = require('express').Router();
// DeStructuring controller
const { renderGaleria } = require('../controllers/galeria');

router.route('/').get(renderGaleria);

// export
module.exports = router;