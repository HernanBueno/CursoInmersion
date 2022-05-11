const Ubicacion = require("./ubicacionAle");
module.exports = class MarsRover{
    #ubicacion;
    #acciones;
    _x;
    _y
    constructor(ubicacion){
        this.#ubicacion = ubicacion;
        this._x = ubicacion.x;
        this._y = ubicacion.y;
        this.#acciones= new Map([
            ["f",()=> this.#ubicacion.orientacion.avanzar(this)],
            ["b",()=> this.#ubicacion.orientacion.retroceder(this)],
            ["l",()=> this.#ubicacion.orientacion.girarALaIzquierda(this)],
            ["r",()=> this.#ubicacion.orientacion.girarALaDerecha(this)]
        ]);

    
    }   
     nombreOrientacion() {
        return this.#ubicacion.orientacion.nombre;
    }
    


     ubicacionX() {
        return this._x;
    }
    
    ubicacionY() {
        return this.#ubicacion.y;
    }
    movilizar(comando){
        Array.from(comando).forEach(caracterComando=> {

            if(this.#acciones.has(caracterComando)){
                this.#acciones.get(caracterComando)();
            }else{
                throw new Error("Comando invalido");  
            }
        });
    }
    get ubicacion(){
      this.#ubicacion.x = this._x
      this.#ubicacion.y = this._y
       return this.#ubicacion
    }
    avanzarAlNorte() {
 
        this.#ubicacion.moverAlNorte();
    }
   



}
