const { User, Exercise } = require('./../models');

module.exports = {
  addExercise: async (req, res) => {
    console.log('addExercise', req.user);
    const { text } = req.body;
    if (!text) {
      return res.status(403).json({ error: 'You must provide an exercise' });
    }
    try {
      return res.status(200).json(newExercise);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  // getAllUserEmails: async (req, res) => {
  //     try {
  //         const userEmails = await User.find({}, 'email');
  //         if(!userEmails) { return res.status(404).json({ error: 'No user emails found ' }); }
  //         return res.status(200).json(userEmails);
  //     } catch (e) {
  //         return res.status(403).json({ e });
  //     }
  // }
}
