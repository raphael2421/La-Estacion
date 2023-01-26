// express
const router = require('express').Router();
// DeStructuring controller
const { renderQsomos } = require('../controllers/qSomos');

router.route('/').get(renderQsomos);

// export
module.exports = router;