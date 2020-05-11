const router = require('express').Router();


// api/user/exercises
router.route('/exercises')
//auth? pass parameter requireAuth
    .post(addExercise);

module.exports = router;
