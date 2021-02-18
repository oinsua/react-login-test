"use strict";

var {
  app,
  server
} = require('./app');

server.listen(app.get('port'), () => {
  console.log("Server is running at port ".concat(app.get('port')));
});