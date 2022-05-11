
module.exports = class Ubicacion{

    static puntosCardinales = ["W","S","E","N"];
    constructor(x,y, orientacion, limite){
        this.x = x;
        this.y = y;
        this.orientacion = orientacion;
        this.limite = limite
        
    }
    girar(sentido){
        this.orientacion.cambiarOrientacion(sentido);
    }
    //  turnLeft() {
    //     this.orientacion = Plano.puntosCardinales[this.#establecerIndicePuntoCardinal("L")];
    //     //#region Sacamos a funcion
    //     // let indiceOrientacion = (Plano.puntosCardinales.indexOf(this.orientacion) + 1) % Plano.puntosCardinales.length;
    //     // this.orientacion = Plano.puntosCardinales[indiceOrientacion];
    //     //#endregion
    //     //#region primer modelo
    //     // switch (this.orientacion) {
    //     //     case 'N':
    //     //         this.orientacion = 'W';
    //     //         break;
    //     //     case 'W':
    //     //         this.orientacion = 'S';
    //     //         break;
    //     //     case 'S':
    //     //         this.orientacion = 'E';
    //     //         break;
    //     //     case 'E':
    //     //         this.orientacion = 'N';
    //     //         break;
    //     // }
    //     //#endregion
    // }
    // turnRight() {
    //     this.orientacion = Plano.puntosCardinales[this.#establecerIndicePuntoCardinal("R")];
    //     //#region primer modelo
    //     // switch (this.orientacion) {
    //     //     case 'N':
    //     //         this.orientacion = 'E';
    //     //         break;
    //     //     case 'E':
    //     //         this.orientacion = 'S';
    //     //         break;
    //     //     case 'S':
    //     //         this.orientacion = 'W';
    //     //         break;
    //     //     case 'W':
    //     //         this.orientacion = 'N';
    //     //         break;

    //     // }

    //     //#endregion
    // }
    
    desplazar(sentido){
        const puntosCardinales = new Map([
            ["N", avanzarAlNorte],
            ["S", avanzarAlSur],
            ["W", avanzarAlOeste],
            ["E", avanzarAlEste]
        ])
        let pasos = this.establecerDireccion(sentido);

        puntosCardinales.get(this.orientacion.puntoCardinal).sumarPaso(this, pasos)

    }
    // moveForward() {


    //     switch (this.orientacion) {
    //         case 'N':
    //             this.y++;
    //             break;
    //         case 'E':
    //             this.x++;
    //             break;
    //         case 'S':
    //             this.y--;
    //             break;
    //         case 'W':
    //             this.x--;
    //             break;

    //     }
    // }
    // moveBackward() {
    //     switch (this.orientacion) {
    //         case 'N':
    //             this.y--;
    //             break;
    //         case 'E':
    //             this.x--;
    //             break;
    //         case 'S':
    //             this.y++;
    //             break;
    //         case 'W':
    //             this.x++;
    //             break;
    //     }
    // }

    // #establecerIndicePuntoCardinal(sentido){

    //     let pasos = this.establecerDireccion(sentido);
    //     return (Ubicacion.puntosCardinales.indexOf(this.orientacion) + pasos) % Ubicacion.puntosCardinales.length;
        

    // }
    establecerDireccion(sentido){
        return sentido === "B" ? -1 : 1;
    }

}




    const avanzarAlNorte = {
        sumarPaso(posicionActual,pasos){
            const resultado = posicionActual.y + pasos;
            return resultado % posicionActual.limite
    }}
    const avanzarAlEste = {
        sumarPaso(posicionActual,pasos){
            const resultado = posicionActual.x + pasos;
            return resultado % posicionActual.limite
            }
    }
    const avanzarAlSur = {
            sumarPaso(posicionActual,pasos){
                
                const resultado = posicionActual.y - pasos;
                return resultado % posicionActual.limite
                }
            }
    const avanzarAlOeste = {
        sumarPaso(posicionActual,pasos){
            const resultado = posicionActual.x - pasos;
            return resultado % posicionActual.limite
            }
                }