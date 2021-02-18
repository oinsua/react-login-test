const connect = require('../database');

const getUsers = async (req, res) => {
  try {
         const allUser = await connect.query('SELECT  FROM USER'); //Se buscan todos los usuarios de la base de datos
         res.json(allUser);  //Retorno todos los usuarios existentes
  } catch (error) {
      res.status(500).json({message: "db in not connected"})
  }
}

const createUser = async (req, res) => {
    try {
         const {username, password, email, name, lastname, phone} = req.body; //Recibir los datos del usuario
         const bcryPass = encrypPass(password);
         const result = await connect.query('INSERT INTO USER SET ?', {username, password: bcryPass, email, name, lastname, phone});
         res.json(result);
    } catch (error) {
        res.status(500).json("Error: Insert User")
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;  //Debo de recibir el id desde el cliente a traves de la url
        const {username, password, email, name, lastname, phone} = req.body; //Se recibe el objeto desde req.body
        //Se actualiza el usuario
        await connect.query('UPDATE `USER` SET ? WHERE `id` = ?',[{username, password, email, name, lastname, phone}, id]);
        res.json({message: "User was updated successfully!"});
    } catch (error) {
        res.status(500).json("Error: Update User")
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;  //Debo de recibir el id desde el cliente a traves de la url
        //Se elimina el usuario
        await connect.query('DELETE FROM `USER` WHERE `id` = ?',[id]);
        res.json({message: "User was deleted successfully!"});
    } catch (error) {
        
    }
}

module.exports = {getUsers, createUser, updateUser, deleteUser};