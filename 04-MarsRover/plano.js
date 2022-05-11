module.exports = class Plano{

    constructor(posicionMaxima){
        this.posicionMaxima = posicionMaxima;
    }

    mantenerseEnElPlanoX(posicion){
        while(posicion.x> this.posicionMaxima){
            posicion.x=  (posicion.x - (this.posicionMaxima)) -(this.posicionMaxima + 1);
        }
        while(posicion.x < -(this.posicionMaxima)){
            posicion.x = (posicion.x + this.posicionMaxima) * -1;
        }
    }
    mantenerseEnElPlanoY(posicion){
        while( posicion.y > this.posicionMaxima ){
            posicion.y =  (posicion.y - (this.posicionMaxima)) -(this.posicionMaxima + 1);
        }
        while(posicion.y < -(this.posicionMaxima)){
            posicion.y = (posicion.y + this.posicionMaxima) * -1;
        }
    }
}