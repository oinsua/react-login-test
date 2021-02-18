const {app, server} = require('./app');

server.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
})