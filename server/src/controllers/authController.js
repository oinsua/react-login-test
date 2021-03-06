const connect = require('../database');
const {SECRET} = require('../jsconfig');
const jwt = require('jsonwebtoken');

/*Funcion que se encarga de registrar un nuevo usuario */
const singUp = async (req, res) => {
 try { //Se reciben los parametros desde el cliente
        const {username, password, email, name, phone } = req.body;
         //Verificar si el usuario existe en la base de datos
         const conn = connect();  
          
         await conn.query('SELECT id FROM user WHERE username = ?',[username], async (err, rows) =>  {
           if (err) res.status(500).json({jwt: `There were no results`});
           if (rows.length) {
               const userExist= { id: rows[0].id};
               if(userExist.id) return res.status(400).json({
                 message:  "User exist"
               }) 
           } else {
                //Insertar el nuevo usuario
                const conn = connect();
                await conn.query(`INSERT INTO user ( username ,  password ,  email , name , phone) 
                                          VALUES (? , ?, ?, ?, ?)`, [username, password, email, name, phone]);
                //si se llega hasta aqui se halla el token y se devuelve
                const token = jwt.sign({id: username}, SECRET, {expiresIn: 86400});
                res.json({jwt: token});
           }
         });
    } catch (error) {
        res.status(500).json({error_msg: "db is not connected"});
    } 
}

const singIn = async (req, res) => {
    try {
         const {username, password} = req.body; //Recibir los datos y asignarlos por destructuracion
         //Verificar si el usuario existe en la base de datos
          const conn = await connect();
          
          await conn.query('SELECT id, password FROM user WHERE username = ?',[username], (err, rows) =>  {
            if (err) res.status(500).json({jwt: `There were no results`});
            if (rows.length) {
                const userExist= { id: rows[0].id, password: rows[0].password};
                if(!userExist.id) return res.status(400).json({
                  message:  "User not found"
                })
                //Verificar si el Password que he recibido es igual al que me envia el cliente
                const matchPass = matchesPassword( password, userExist.password);
                if(!matchPass) return res.status(401).json({message: "password not valid"})
       
                //si se llega hasta aqui se halla el token y se devuelve
                const token = jwt.sign({id: userExist.id}, SECRET, {expiresIn: 86400});
                res.json({jwt: token}); 
            } else {
                res.status(500).json({message: `There were no results`});
            }
          });
    } catch (error) {
        res.status(500).json({error_msg: "db is not connected"})
    }
}

const matchesPassword = (new_password, old_password) => {
    return (new_password === old_password); 
}

module.exports = {singIn, singUp};