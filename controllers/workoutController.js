const { Workout } = require('./../models');

module.exports = {

  getWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find({});
      if (!workouts) {
        return res.status(404).json({ error: 'No workouts found' });
      }
      return res.status(200).json(workouts);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  createWorkout: async (req, res) => {
    try {
      const newWorkout = await Workout().save();
      return res.status(200).json(newWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  updateWorkout: async (req, res) => {
    const { workoutId } = req.params;
    const { type, name, duration, distance, weight, reps, sets } = req.body;
    console.log('this is addExercise req.body', { type, name, duration, distance, weight, reps, sets });
    try {
      const updatedWorkout = await Workout.findByIdAndUpdate(
        workoutId,
        {
          $push: {
            exercises:
              [{ type, name, duration, distance, weight, reps, sets }]
          }
        },
        { new: true, runValidators: true },
      );
      return res.status(200).json(updatedWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  workoutInRange: async (req, res) => {
    try {
      const workout = await Workout.find({}).limit(7);
      if (!workout) {
        return res.status(404).json({ error: 'No workouts found in range' });
      }
      return res.status(200).json(workout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  deleteWorkout: async ( req, res) => {
    const { workoutId } = req.params;
    try {
      const workoutToDelete = await Workout.findById(workoutId);
      if(!workoutToDelete) {
        return res.status(401).json({ error: 'No workouts with that ID' });
      }
      const deletedWorkout = await Workout.findByIdAndDelete(workoutId);
      return res.status(200).json(deletedWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
