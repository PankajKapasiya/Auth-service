const express = require('express');

const router = express.Router();

const UserController = require ('../../controllers/users_controllers');

router.post('/signup', UserController.create);
router.delete('/:id',UserController.destroy);
module.exports = router; 