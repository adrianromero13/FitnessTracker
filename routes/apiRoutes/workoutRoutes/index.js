const router = require('express').Router();

const { getWorkouts, createWorkout, updateWorkout, getRange, deleteWorkout } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/')
.get(getWorkouts)
.post(createWorkout);

router.route('/:workoutId')
  .delete(deleteWorkout)
  .put(updateWorkout);

router.route('/range')
  .get(getRange);

module.exports = router;
