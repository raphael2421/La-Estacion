// express
const router = require('express').Router();
// DeStructuring controller
const { allPosts, postCrear, subirImg } = require('../../controllers/api/blog');

router.route('/')
   .get(allPosts)
router.route('/')
   .post(postCrear)

router.route('/upload-img/:id')
    .post(subirImg);
// export
module.exports = router;