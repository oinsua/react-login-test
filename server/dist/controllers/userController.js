"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var connect = require('../database');

var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res) {
    try {
      var allUser = yield connect.query('SELECT  FROM USER'); //Se buscan todos los usuarios de la base de datos

      res.json(allUser); //Retorno todos los usuarios existentes
    } catch (error) {
      res.status(500).json({
        message: "db in not connected"
      });
    }
  });

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (req, res) {
    try {
      var {
        username,
        password,
        email,
        name,
        lastname,
        phone
      } = req.body; //Recibir los datos del usuario

      var bcryPass = encrypPass(password);
      var result = yield connect.query('INSERT INTO USER SET ?', {
        username,
        password: bcryPass,
        email,
        name,
        lastname,
        phone
      });
      res.json(result);
    } catch (error) {
      res.status(500).json("Error: Insert User");
    }
  });

  return function createUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (req, res) {
    try {
      var id = req.params.id; //Debo de recibir el id desde el cliente a traves de la url

      var {
        username,
        password,
        email,
        name,
        lastname,
        phone
      } = req.body; //Se recibe el objeto desde req.body
      //Se actualiza el usuario

      yield connect.query('UPDATE `USER` SET ? WHERE `id` = ?', [{
        username,
        password,
        email,
        name,
        lastname,
        phone
      }, id]);
      res.json({
        message: "User was updated successfully!"
      });
    } catch (error) {
      res.status(500).json("Error: Update User");
    }
  });

  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)(function* (req, res) {
    try {
      var id = req.params.id; //Debo de recibir el id desde el cliente a traves de la url
      //Se elimina el usuario

      yield connect.query('DELETE FROM `USER` WHERE `id` = ?', [id]);
      res.json({
        message: "User was deleted successfully!"
      });
    } catch (error) {}
  });

  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};