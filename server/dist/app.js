"use strict";

var express = require('express');

var http = require('http');

var morgan = require('morgan'); //Se utiliza para visualizar por consola las peticiones http


var cors = require('cors');

var {
  PORT
} = require('./jsconfig'); //Importando las rutas


var userRouter = require('./routes/userRoutes');

var authRouter = require('./routes/authRoutes'); //Settings


var app = express(); //Se crea el obj express

var server = http.createServer(app); //Se crea el servidor a traves del objeto http
//middlewares

app.use(morgan('dev'));
app.use(express.json()); //Para poder trabajar con objetos json

app.use(cors()); //routers

app.set('port', PORT); //Se define le puerto del server

app.get('/', (req, res) => {
  res.json({
    message: "welcome to server application"
  });
}); //Se agregan las rutas de la app

app.use('/user', userRouter);
app.use('/auth', authRouter);
module.exports = {
  app,
  server
};