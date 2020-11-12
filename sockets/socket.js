// Mensajes de sockets
const {io} = require('../index.js');

io.on('connection', client => {
    
    console.log('Cliente conectado');

    client.on('disconnect', () => { 

        console.log('Cliente Desconectado');        

    });

    client.on('mensaje', (payload)=> {

        console.log('Mensaje!!!!', payload);

        io.emit('mensaje', {admin: "Nuevo mensaje"});
    });
  });



