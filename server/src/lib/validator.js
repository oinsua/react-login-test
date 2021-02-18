const connect = require('../database');

const verifyUserExist = async (username) => {
    //Verificar si el usuario existe en la base de datos
    const conn = await connect(); 
            
    await conn.query('SELECT * FROM user WHERE username = ?',[username], (err, rows) =>  {
      if (err) res.status(500).json({message: `There were no results`});
      if (rows.length) return true;
      return false;
    })
}

module.exports = {verifyUserExist};