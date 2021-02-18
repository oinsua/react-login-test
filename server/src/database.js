const mysql2 = require('mysql2');
const {HOST, USER, PASSWORD, DATABASE, PORT} = require('./jsconfig');

const connect = () => {
    try {
        const connection = mysql2.createConnection({
            host: HOST,
            user: USER,
            password: PASSWORD,
            database: DATABASE,
            port: PORT,
            connectionLimit: 10
          });
          connection.connect(function(error){
            if(error){
                console.log(`db is not connected, error: ${error}`); 
            }else{
               console.log('db is connected.');
            }
         });
          return connection;
    } catch (error) {
        console.log(`db is not connected, error: ${error}`); 
    }   
}

module.exports = connect;