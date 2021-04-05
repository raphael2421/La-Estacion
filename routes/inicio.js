// express
const router = require('express').Router();
// DeStructuring controller
const { renderInicio, formaDeContacto, refID } = require('../controllers/inicio');

router.route('/')
.get(renderInicio)
.post(formaDeContacto)


// export
module.exports = router;