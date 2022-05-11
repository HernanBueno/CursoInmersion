const Alpiste = require("./alpiste");

module.exports = class Golondrina {
    constructor(energiaEnJoules) {
        this._energiaEnJoules = energiaEnJoules;
    }
    ganarEnergia(joulesASumar) {
        this._energiaEnJoules = this._energiaEnJoules + joulesASumar;
    }

    gastarEnergia(joulesARestar) {
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


    volar(kilometros) {
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
    queHacerSi(golondrina){
        const alpiste = new Alpiste(20);
        golondrina.comer(alpiste)
    },

    comprobarAnimo(golondrina){
        return golondrina.estaDebil()
    }
}
const estadoDeAnimoFeliz = {

    queHacerSi(golondrina){
         golondrina.volar(5);
},

comprobarAnimo(golondrina){
    return golondrina.estaFeliz()
}

}
const estadoDeAnimoNormal = {
    queHacerSi(golondrina){

    },
    comprobarAnimo(golondrina){
        return !golondrina.estaDebil() && !golondrina.estaFeliz()
    }
}

const estadosDeAnimo = [estadoDeAnimoDebil, estadoDeAnimoFeliz, estadoDeAnimoNormal];
