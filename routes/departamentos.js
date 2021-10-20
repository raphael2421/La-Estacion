// express
const router = require('express').Router();
// DeStructuring controller
const { renderDepartamentos } = require('../controllers/proyecto');

router.route('/').get(renderDepartamentos)

// export
module.exports = router;