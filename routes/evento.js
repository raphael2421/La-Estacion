// express
const router = require('express').Router();
// DeStructuring controller
const { renderInicio, formaDeContacto, captureRefs } = require('../controllers/evento');

router.route('/')
.get(renderInicio)
.post(formaDeContacto)


router.route('/ref/:id-:lang')
   .get(captureRefs)
router.route('/ref/:id')
   .get(captureRefs)
router.route('/ref')
.get(captureRefs)

// export
module.exports = router;