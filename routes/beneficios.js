// express
const router = require('express').Router();
// DeStructuring controller
const { renderBeneficios } = require('../controllers/beneficios');

router.route('/').get(renderBeneficios);

// export
module.exports = router;