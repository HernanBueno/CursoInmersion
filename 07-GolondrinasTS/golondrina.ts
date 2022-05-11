const Alpiste = require('./alpiste')

module.exports = class Golondrina {
    _energiaEnJoules : number;
    constructor(energiaEnJoules:number) {
        this._energiaEnJoules = energiaEnJoules;
    }
    ganarEnergia(joulesASumar: number) {
        this._energiaEnJoules = this._energiaEnJoules + joulesASumar;
    }

    gastarEnergia(joulesARestar: number) {
        this._energiaEnJoules = this._energiaEnJoules - joulesARestar;
    }

    energiaGolondrina() {
        return this._energiaEnJoules;
    }

    comer(alimento) {
        if (alimento.cantidadEnGramos <= 0) {
            throw new Error("No hay comida");
        } 
        this.ganarEnergia(alimento.cantidadDeJoules());
    }


    volar(kilometros:number) {
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

    haceLoQueQuieras() {
    
        this.estadoDeAnimo().queHacerSi(this);
    }
    estaDebil() {
        return this.energiaGolondrina() < 50;
    }
    estaFeliz() {
        return this.energiaGolondrina() > 500;
    }
    estadoDeAnimo() {
        return estadosDeAnimo.
            find(estadoDeAnimo => estadoDeAnimo.comprobarAnimo(this));
    }
    

};
const estadoDeAnimoDebil = {
    queHacerSi(golondrina : Golondrina){
        const alpiste = new Alpiste(20);
        golondrina.comer(alpiste)
    },

    comprobarAnimo(golondrina: Golondrina){
        return golondrina.estaDebil()
    }
}
const estadoDeAnimoFeliz = {

    queHacerSi(golondrina: Golondrina){
        golondrina.volar(5);
},

comprobarAnimo(golondrina: Golondrina){
    return golondrina.estaFeliz()
}

}
const estadoDeAnimoNormal = {
    queHacerSi(golondrina: Golondrina){

    },
    comprobarAnimo(golondrina: Golondrina){
        return !golondrina.estaDebil() && !golondrina.estaFeliz()
    }
}

const estadosDeAnimo = [estadoDeAnimoDebil, estadoDeAnimoFeliz, estadoDeAnimoNormal];
