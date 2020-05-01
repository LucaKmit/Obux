const express = require('express');
const routes = express.Router();

const userController = require('./Controllers/userController');

routes.post('/createuser', userController.createUser);
routes.get('/getuser/:id', userController.getUser);
routes.post('/login', userController.login);

module.exports = routes;
