const router = require('express').Router();

// const { getWorkout, createWorkout, deleteWorkout, updateWorkout, workoutInRange } = require('./../../../controllers/workoutController');
const { getWorkouts, createWorkout, updateWorkout, workoutInRange, deleteWorkout } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/')
.get(getWorkouts)
.post(createWorkout);

router.route('/:id')
  .delete(deleteWorkout)
  .put(updateWorkout);

router.route('/range')
  .get(workoutInRange);

module.exports = router;
