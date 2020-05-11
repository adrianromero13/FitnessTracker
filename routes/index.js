const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

// '/' prepended in every route here
router.use('/api', apiRoutes); // handle route if '/api'

module.exports = router;
