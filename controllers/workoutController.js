const { Workout } = require('./../models');

module.exports = {

  getWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find({});
      if (!workouts) {
        return res.status(404).json({ error: 'No workouts found' });
      }
      return res.status(200).json( workouts );
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

  // updateWorkout: 

  // getWorkoutCreated: async ( req, res) => {
  //   const { workoutId } = req.params.id;
  //   const { workout } = req.body;
  //   console.log('getWorkout', req.body);
  //   try {
  //     const workoutById = await Workout.findById(workoutId);
  //     if(!workoutById) {
  //       return res.status(404).json({ error: 'This exercise was never created' });

  //     }

  //   } catch (e) {

  //   }
  // },

};
