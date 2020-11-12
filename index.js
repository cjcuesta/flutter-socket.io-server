const express = require('express');
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');

//path publico
const publicPath = path.resolve(__dirname, 'public');

app.use( express.static(publicPath));

//app.listen(3000, (err) =>{
    server.listen(process.env.PORT, (err) =>{    

    if ( err ) throw new Error(err);

    //console.log('Servidor Corriendo en puerto', 3000);
    console.log('Servidor Corriendo en puerto', process.env.PORT);
});