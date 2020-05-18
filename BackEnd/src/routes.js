const express = require('express');

const path = require('path');

const routes = express.Router();

const multer = require('multer');
const { createUserMulterConfig } = require('./Config/multer');

const userController = require('./Controllers/userController');
const bookController = require('./Controllers/bookController');

routes.post('/createuser', multer(createUserMulterConfig).single('pfp'), userController.createUser);
routes.get('/getuser/:id', userController.getUser);
routes.post('/login', userController.login);
routes.delete('/deluser:id', userController.delUser);
routes.put('/updateuser:id', userController.updateUser);
routes.get('/files/:fileName', (req, res) => {
  const { fileName } = req.params;

  return res.sendFile(path.resolve(__dirname, '..', 'uploads', fileName), {}, (err) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

routes.post('/registerbook', multer(createUserMulterConfig).single('foto'), userController.registerBook);
routes.get('/getbook/:id', bookController.getBook);
routes.delete('/delbook:id', bookController.delBook);
routes.put('/updatebook', bookController.updateBook);
routes.post('/findbook', bookController.findBook);

module.exports = routes;
