// express
const router = require('express').Router();
// DeStructuring controller
const { renderInicio } = require('../controllers/inicio');

router.route('/').get(renderInicio)

// export
module.exports = router;