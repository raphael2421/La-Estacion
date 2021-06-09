// express
const router = require('express').Router();
// DeStructuring controller
const { refCrear, refAll } = require('../../controllers/api/referal');

router.route('/')
   .get(refAll)
   .post(refCrear)


// export
module.exports = router;