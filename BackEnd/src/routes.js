const express = require('express');

const path = require('path');

const routes = express.Router();

const multer = require('multer');
const { createUserMulterConfig } = require('./Config/multer');

const userController = require('./Controllers/userController');

routes.post('/createuser', multer(createUserMulterConfig).single('pfp'), userController.createUser);
routes.get('/getuser/:id', userController.getUser);
routes.post('/login', userController.login);

routes.get('/files/:fileName', (req, res) => {
  const { fileName } = req.params;

  return res.sendFile(path.resolve(__dirname, '..', 'uploads', fileName), {}, (err) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

module.exports = routes;
