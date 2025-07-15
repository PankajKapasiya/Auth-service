const express = require('express');

const {authvalidate} = require('../../middlewares/index');
const router = express.Router();

const UserController = require ('../../controllers/users_controllers');

router.post('/signup',
    authvalidate.validate,
    UserController.create
);

router.post('/signin' , 
    authvalidate.validate,
    UserController.signin
);

router.get('/isAuthenticated' , UserController.isAuthenticated);

router.delete('/:id',UserController.destroy);
module.exports = router; 