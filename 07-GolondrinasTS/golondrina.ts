const Alpiste = require('./alpiste')

module.exports = class Golondrina {
    _energiaEnJoules : number;
    constructor(energiaEnJoules:number) {
        this._energiaEnJoules = energiaEnJoules;
    }
    ganarEnergia(joulesASumar: number) :void {
        this._energiaEnJoules = this._energiaEnJoules + joulesASumar;
    }

    gastarEnergia(joulesARestar: number) :void{
        this._energiaEnJoules = this._energiaEnJoules - joulesARestar;
    }

    energiaGolondrina() :number{
        return this._energiaEnJoules;
    }

    comer(alimento):void {
        if (alimento.cantidadEnGramos <= 0) {
            throw new Error("No hay comida");
        } 
        this.ganarEnergia(alimento.cantidadDeJoules());
    }


    volar(kilometros:number):void {
        if (kilometros <= 0) {
            throw new Error("La distancia no es valida");
        } 
        const cantidadDeJoulesAGastar = kilometros + 10;
        if (cantidadDeJoulesAGastar > this.energiaGolondrina()) {
            throw new Error(
            "No hay suficiente energia para la distancia a recorrer"
            );
        }
        this.gastarEnergia(cantidadDeJoulesAGastar);
        
    }

    haceLoQueQuieras():void {
    
        this.estadoDeAnimo().queHacerSi(this);
    }
    estaDebil():boolean {
        return this.energiaGolondrina() < 50;
    }
    estaFeliz():boolean {
        return this.energiaGolondrina() > 500;
    }
    estadoDeAnimo(){
        return estadosDeAnimo.
            find(estadoDeAnimo => estadoDeAnimo.comprobarAnimo(this));
    }
    

};
const estadoDeAnimoDebil = {
    queHacerSi(golondrina ):void{
        const alpiste = new Alpiste(20);
        golondrina.comer(alpiste)
    },

    comprobarAnimo(golondrina):boolean{
        return golondrina.estaDebil()
    }
}
const estadoDeAnimoFeliz = {

    queHacerSi(golondrina):void{
        golondrina.volar(5);
},

comprobarAnimo(golondrina):boolean{
    return golondrina.estaFeliz()
}

}
const estadoDeAnimoNormal = {
    queHacerSi(golondrina):void{

    },
    comprobarAnimo(golondrina):boolean{
        return !golondrina.estaDebil() && !golondrina.estaFeliz()
    }
}

const estadosDeAnimo = [estadoDeAnimoDebil, estadoDeAnimoFeliz, estadoDeAnimoNormal];
