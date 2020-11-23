class Lectura{

    constructor(id,
        rowid,
        area,
        conteo,
        contador,
        barCode,
        cantidad,
        orden,
        estado,
        fechahora,
        transmitido,
        fhTransmitido){

        this.id = id;
        this.rowid = rowid;
        this.area = area;
        this.conteo = conteo;
        this.contador = contador;
        this.barCode= barCode;
        this.cantidad = cantidad;
        this.orden = orden;
        this.estado = estado;
        this.fechahora = fechahora;
        this.transmitido = transmitido;
        this.fhTransmitido = fhTransmitido;

    }

}

module.exports = Lectura;