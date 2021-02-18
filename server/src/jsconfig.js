const dotenv = require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    CONNECTIONLIMIT: process.env.CONNECTIONLIMIT,
    SECRET: process.env.SECRET
}