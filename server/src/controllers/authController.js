const connect = require('../database');
const {SECRET} = require('../jsconfig');
const jwt = require('jsonwebtoken');

/* NOTA: Me faltan dos funcions por definir en el controller*/

const singUp = async (req, res) => {
 try { //Se reciben los parametros desde el cliente
        const {username, password, email, name, lastname, phone } = req.body;
        console.log('username', username);
        //const bcryPass = encrypPassword(password); //Encriptar la contrasenna
        //Insertar el nuevo usuario
       // const result = await connect.query('INSERT INTO `USER` SET ?', {username, password, email, name, lastname, phone});
        //Hallarle el token y establecer el tiempo de expiracion
        connect.query(
            'SELECT * FROM `USER`',
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              console.log(fields); // fields contains extra meta data about results, if available
            }
          );
        const token = jwt.sign({id: result[0].id}, SECRET, {expiresIn: 86400});
        //Retornar el token
        return res.json(token);
    } catch (error) {
        res.status(500).json({error_msg: "db is not connected"});
    } 
}

const singIn = async () => {
    try {
         const {username, password} = req.body; //Recibir los datos y asignarlos por destructuracion
         //Verificar si el usuario existe en la base de datos
         const userExist = await connect.query(
                                  'SELECT `id`, `username`, `password` FROM `USER` WHERE `username` = ?', [username]);
         if(!userExist[0].username) return res.status(400).json({
           message:  "User not found"
         })
         //Verificar si el Password que he recibido es igual al que me envia el cliente
         const matchPass = matchesPassword( password, userExist[0].password);
         if(!matchPass) return res.status(401).json({message: "password not valid"})

         //si se llega hasta aqui se halla el token y se devuelve
         const token = jwt.sign({id: userExist[0].id}, SECRET, {expiresIn: 86400});
         res.json(token);
    } catch (error) {
        res.status(500).json({error_msg: "db is not connected"})
    }
}

module.exports = {singIn, singUp};