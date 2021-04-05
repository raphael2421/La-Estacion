// express
const router = require('express').Router();
// DeStructuring controller
const { allForms } = require('../../controllers/api/formaContacto');

router.route('/')
.get(allForms)

// export
module.exports = router;