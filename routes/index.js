const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const usersRouter = require('./users'); 
const postsRouter = require('./posts');

router.get('/home', homeController.home);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);

module.exports = router;