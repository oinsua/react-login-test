"use strict";

var express = require('express');

var route = express.Router(); //Se crea el objeto ruta para especificar todos los endpoint

var {
  check
} = require('express-validator'); //Se utiliza para desarrollar validadciones antes de entrar a la base datos


var {
  singIn,
  singUp
} = require('../controllers/authController');

route.get('/', (req, res) => {
  res.json({
    message: "welcome to auth"
  });
});
route.post('/singup', [check('username').notEmpty().withMessage('Username not must be null'), check('username').isLength({
  min: 3
}).withMessage('Username must be greater than 3'), check('password').notEmpty().withMessage('password not must be null'), check('password').isLength({
  min: 8
}).withMessage('password mut be greater than 8'), check('name').notEmpty().withMessage('Name not must be null'), check('lastname').notEmpty().withMessage('Lastname not must be null')], singUp); //Crear un nuevo usuario

route.post('/singin', [check('username').notEmpty().withMessage('Username not must be null'), check('username').isLength({
  min: 3
}).withMessage('Username must be greater than 3'), check('password').notEmpty().withMessage('password not must be null'), check('password').isLength({
  min: 8
}).withMessage('password mut be greater than 8')], singIn); //Verificar si el usuario esta registrado

module.exports = route;