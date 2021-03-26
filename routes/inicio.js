// express
const router = require('express').Router();
// DeStructuring controller
const { renderInicio, formaDeContacto } = require('../controllers/inicio');

router.route('/')
.get(renderInicio)
   .post(formaDeContacto)

// export
module.exports = router;