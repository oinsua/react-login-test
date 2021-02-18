"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var connect = require('../database');

var verifyUserExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (username) {
    //Verificar si el usuario existe en la base de datos
    var conn = yield connect();
    yield conn.query('SELECT id FROM user WHERE username = ?', [username], (err, rows) => {
      if (err) res.status(500).json({
        message: "There were no results"
      });

      if (rows.length) {
        rows.forEach(function (row) {
          return {
            id: 1
          };
        });
      } else {
        return {
          id: 0
        };
      }
    });
  });

  return function verifyUserExist(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  verifyUserExist
};