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
    const newWorkout = req.body;
    console.log(newWorkout);
    if (!newWorkout) {
      return res.status(422).json({ error: 'You must input a new workout' });
    }
    try {
      const creatingWorkout = await new Workout({ day: new Date(), exercises: newWorkout }).save();
      console.log(res.body)
      return res.json({ creatingWorkout });
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  addExercise: async (req, res) => {
    const workoutId = req.params.id;
    const { type, name, duration, distance, weight, reps, sets } = req.body;
    console.log('this is addExercise req.body', { type, name, duration, distance, weight, reps, sets });
    try {
      const workoutToUpdate = await Workout.findById(workoutId);
      if (!workoutToUpdate) {
        return res.status(401).json({ error: 'No workout with that Id found' });
      }
      const updatedWorkout = await Workout.findByIdAndUpdate(workoutId,
        {
          $push:
          {
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
    try{
      const workout = await Workout.find({}).limit(7);
      if(!workout) {
        return res.status(404).json({ error: 'No workouts found in range' });
      }
      return res.status(200).json(workout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
