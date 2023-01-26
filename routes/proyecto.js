// express
const router = require('express').Router();
// DeStructuring controller
const { renderProyecto } = require('../controllers/proyecto');

router.route('/').get(renderProyecto)

// export
module.exports = router;