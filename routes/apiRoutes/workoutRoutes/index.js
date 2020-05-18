const router = require('express').Router();

const { getLastWorkout, createWorkout, deleteWorkout, updateWorkout, workoutInRange } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/')
.get(getLastWorkout)
  .post(createWorkout);

router.route('/:workoutId')
  .delete(deleteWorkout)
  .put(updateWorkout);

router.route('/range')
  .get(workoutInRange);

module.exports = router;
