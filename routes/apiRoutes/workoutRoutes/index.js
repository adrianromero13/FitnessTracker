const router = require('express').Router();

// const { getWorkout, createWorkout, deleteWorkout, updateWorkout, workoutInRange } = require('./../../../controllers/workoutController');
const { getWorkouts, getWorkoutCreated, createWorkout, updateWorkout, addExercise, workoutInRange } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/')
.get(getWorkouts)
.post(createWorkout);

router.route('/:id')
.put(addExercise);

  // .get(getWorkoutCreated);
  // .delete(deleteWorkout)
  // .put(updateWorkout);

router.route('/range')
  .get(workoutInRange);

module.exports = router;
