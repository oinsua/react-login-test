"use strict";

var express = require('express');

var route = express.Router(); //Se crea el objeto ruta para especificar todos los endpoint

var {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

var {
  check
} = require('express-validator'); //Se utiliza para desarrollar validadciones antes de entrar a la base datos


route.get('/', getUsers); //Para devolver todos los usuarios

route.post('/', [check('username').notEmpty().withMessage('Username not must be null'), check('password').notEmpty().withMessage('Password not must be null'), check('password').isLength({
  min: 8
}).withMessage('password mut be greater than 8'), check('name').notEmpty().withMessage('Name not must be null'), check('lastname').notEmpty().withMessage('Lastname not must be null')], createUser); //Para crear un nuevo usuario

route.put('/:id', [check('username').notEmpty().withMessage('Username not must be null'), check('password').notEmpty().withMessage('Password not must be null'), check('password').isLength({
  min: 8
}).withMessage('password mut be greater than 8'), check('name').notEmpty().withMessage('Name not must be null'), check('lastname').notEmpty().withMessage('Lastname not must be null')], updateUser); //Para actualziarun usuario

route.delete('/:id', deleteUser); //Para eliminar un usuario

module.exports = route;