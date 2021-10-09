const router = require('express').Router();
const userRoutes = require('./user-routes');

// add users and thoughts to the beginning of their respective routes
router.use('/users', userRoutes);

module.exports = router;