// express
const router = require('express').Router();
// DeStructuring controller
const { renderPrivacidad } = require('../controllers/privacidad');

router.route('/').get(renderPrivacidad)

// export
module.exports = router;