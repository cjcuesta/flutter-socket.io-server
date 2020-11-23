// Mensajes de sockets
const {io} = require('../index.js');

const Lecturas = require("../models/Lecturas");
const Lectura = require("../models/Lectura");
const lecturas = new Lecturas();

// lecturas.addLectura(new 
//     Lectura(1,     //     id: 1,
//             1,     //     rowid,1
//             1,     //     area: 1,
//             1,     //     conteo: 1,
//             '1111',//     contador: '1111',
//             'BARCODE1',   //     barCode: '1111111',
//             1,     //     cantidad: 1,
//             1,     //     orden: 1,
//            'B',   //     estado: 'B',
//            '',    //     fechahora: '',
//            'S',   //     transmitido: 'N',
//            ''    //     fhTransmitido: '')
// ));

//lecturas.addLectura(new Lectura(2, 1, 1, 1, '1111', 'BARCODE2', 1, 1, 'ESTADO', 'FECHAHORA', 'TRANSMITIDO',''));

console.log(lecturas);


io.on('connection', client => {
    
    console.log('Cliente conectado');

    io.emit('lecturas', lecturas.getLecturas());

    client.on('disconnect', () => { 

        console.log('Cliente Desconectado');        

    });

    client.on('mensaje', (payload)=> {

        console.log('Mensaje!!!!', payload);

        io.emit('mensaje', {admin: "Nuevo mensaje"});
    });
    
    client.on('emitir-mensaje',(payload) =>{
        console.log(payload);
        io.emit('nuevo-mensaje', payload);//emite a todos hasta de quien llegó el mensaje
        //client.broadcast.emit('',payload);//emite a todos menos al cliente de donde viene el mensaje
    });

    client.on('add-cantidad', (payload)=> {
        //desde el navegador socket.emit('add-cantidad', {"id":"1"});

        console.log('Adicionar cantidad!!!!:', payload);
        lecturas.addCantidad(payload.id);
        io.emit('lecturas', lecturas.getLecturas());
        
    });

    client.on('delete-lectura', (payload)=> {
        //desde el navegador socket.emit('delete-lectura', {"id":1});

        console.log('Borrar Lectura!!!!:', payload);
        lecturas.deleteLectura(payload.id);
        io.emit('lecturas', lecturas.getLecturas());
        
    });
    

    client.on('add-lectura', (payload)=> {
    //socket.emit('add-lectura', { "id": 3, "rowid": 1, "area": 1, "conteo": 1, "contador": "1111", "barCode": "1111111", "cantidad": 1, "orden": 1,"estado": "B", "fechahora": "", "transmitido": "N", "fhTransmitido": "" });
        console.log('Adicionar Lectura!!!!:', payload);

        lecturas.addLectura(new Lectura(payload.id,
            payload.rowid,
            payload.area,
            payload.conteo,
            payload.contador,
            payload.barCode,
            payload.cantidad,
            payload.orden,
            payload.estado,
            payload.fechahora,
            payload.transmitido,
            payload.fhTransmitido)
            );
    
        io.emit('lecturas', lecturas.getLecturas());
        
    });
   
    
  


  });



