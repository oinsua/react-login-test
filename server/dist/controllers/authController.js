"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var connect = require('../database');

var {
  SECRET
} = require('../jsconfig');

var jwt = require('jsonwebtoken');
/*Funcion que se encarga de registrar un nuevo usuario */


var singUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res) {
    try {
      //Se reciben los parametros desde el cliente
      var {
        username,
        password,
        email,
        name,
        phone
      } = req.body; //Verificar si el usuario existe en la base de datos

      var conn = connect();
      yield conn.query('SELECT id FROM user WHERE username = ?', [username], /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* (err, rows) {
          if (err) res.status(500).json({
            jwt: "There were no results"
          });

          if (rows.length) {
            var userExist = {
              id: rows[0].id
            };
            if (userExist.id) return res.status(400).json({
              message: "User exist"
            });
          } else {
            //Insertar el nuevo usuario
            var _conn = connect();

            yield _conn.query("INSERT INTO user ( username ,  password ,  email , name , phone) \n                                          VALUES (? , ?, ?, ?, ?)", [username, password, email, name, phone]); //si se llega hasta aqui se halla el token y se devuelve

            var token = jwt.sign({
              id: username
            }, SECRET, {
              expiresIn: 86400
            });
            res.json({
              jwt: token
            });
          }
        });

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    } catch (error) {
      res.status(500).json({
        error_msg: "db is not connected"
      });
    }
  });

  return function singUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var singIn = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (req, res) {
    try {
      var {
        username,
        password
      } = req.body; //Recibir los datos y asignarlos por destructuracion
      //Verificar si el usuario existe en la base de datos

      var conn = yield connect();
      yield conn.query('SELECT id, password FROM user WHERE username = ?', [username], (err, rows) => {
        if (err) res.status(500).json({
          jwt: "There were no results"
        });

        if (rows.length) {
          var userExist = {
            id: rows[0].id,
            password: rows[0].password
          };
          if (!userExist.id) return res.status(400).json({
            message: "User not found"
          }); //Verificar si el Password que he recibido es igual al que me envia el cliente

          var matchPass = matchesPassword(password, userExist.password);
          if (!matchPass) return res.status(401).json({
            message: "password not valid"
          }); //si se llega hasta aqui se halla el token y se devuelve

          var token = jwt.sign({
            id: userExist.id
          }, SECRET, {
            expiresIn: 86400
          });
          res.json({
            jwt: token
          });
        } else {
          res.status(500).json({
            message: "There were no results"
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        error_msg: "db is not connected"
      });
    }
  });

  return function singIn(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var matchesPassword = (new_password, old_password) => {
  return new_password === old_password;
};

module.exports = {
  singIn,
  singUp
};