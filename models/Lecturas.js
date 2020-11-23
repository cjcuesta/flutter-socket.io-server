const lectura = require("./lectura");

class Lecturas{

    constructor(){
        this.lecturas = [];
    }

    addLectura( lectura = new lectura()){
        this.lecturas.push(lectura);
    }

    getLecturas(){
        return this.lecturas;
    }

    deleteLectura( id = ''){
        this.lecturas = this.lecturas.filter(lectura => lectura.id !== id );
        return this.lecturas;
    }

    addCantidad( id = ''){
        this.lecturas = this.lecturas.map ( lectura => {

            if( lectura.id == id){
                lectura.cantidad = lectura.cantidad + 1;               
                return lectura;
            }else{
               return lectura;
            }
        }


        );
    }


}

module.exports = Lecturas;