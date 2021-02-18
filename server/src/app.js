const express = require('express');
const http = require('http');
const morgan = require('morgan'); //Se utiliza para visualizar por consola las peticiones http
const cors = require('cors');
const {PORT} = require('./jsconfig');

//Importando las rutas
const userRouter = require('./routes/userRoutes'); 
const authRouter = require('./routes/authRoutes');


//Settings
const app = express(); //Se crea el obj express
const server = http.createServer(app); //Se crea el servidor a traves del objeto http

//middlewares
app.use(morgan('dev'));
app.use(express.json()); //Para poder trabajar con objetos json
app.use(cors());

//routers
app.set('port', PORT); //Se define le puerto del server

app.get('/', (req, res) => {
    res.json({message: "welcome to server application"});
})
//Se agregan las rutas de la app
app.use('/user', userRouter);
app.use('/auth', authRouter);


module.exports = {app, server};