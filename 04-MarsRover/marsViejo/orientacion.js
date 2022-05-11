module.exports = class Orientacion{
    static #puntosCardinales = ["W","S","E","N"];
    constructor(puntoCardinal){
        this.puntoCardinal = puntoCardinal;
    }

    cambiarOrientacion(sentido){
        this.puntoCardinal = Orientacion.#puntosCardinales[this.#establecerIndicePuntoCardinal(sentido)];
    }

    #establecerIndicePuntoCardinal(sentido){

        let pasos = this.#establecerSentido(sentido);
        return (Orientacion.#puntosCardinales.indexOf(this.puntoCardinal) + pasos) % Orientacion.#puntosCardinales.length;
    }

    #establecerSentido(sentido){
        return sentido === "R" ? -1 : 1;
    }



}