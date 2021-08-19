// express
const router = require('express').Router();
// DeStructuring controller
const { refCrear, refAll, confirmarAsistencia } = require('../../controllers/api/referal');

router.route('/')
   .get(refAll)
   .post(refCrear)

router.route('/confirmacion').post(confirmarAsistencia);
// export
module.exports = router;