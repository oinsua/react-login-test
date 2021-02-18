const mysql = require('mysql2');

const connect = () => {
    try {
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'g3m0s',
            database: 'db_prueba'
          });
          return connection;
    } catch (error) {
        console.log(`db is not connected, error: ${error}`); 
    }   
}

module.exports = connect;