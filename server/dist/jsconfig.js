"use strict";

var dotenv = require('dotenv').config();

module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  PORT: 3306,
  DATABASE: 'db_prueba',
  CONNECTIONLIMIT: process.env.CONNECTIONLIMIT,
  SECRET: 'ESTOESUNAPRUEBAYNOSEDEBEUSARENPROD123A'
};