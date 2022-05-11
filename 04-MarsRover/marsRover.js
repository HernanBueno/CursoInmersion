
module.exports = class MarsRover{

    constructor(ubicacion,tamanoPlano){
        this.ubicacion = ubicacion;
        this.tamanoPlano = tamanoPlano
    }

    mover(stringDeComandos) {

        this.comandosCorrespondientesA(stringDeComandos).forEach(comando=>comando.ejcutarSobre(this.ubicacion))


        this.tamanoPlano.mantenerseEnElPlanoX(this.ubicacion)
        this.tamanoPlano.mantenerseEnElPlanoY(this.ubicacion)
    }

    comandosCorrespondientesA(comandos) {
        const comandosSegunCaracter =new Map([
            ["L", comandoGirarIzquierda],
            ["R", comandoGirarDerecha],
            ["F", avanzar],
            ["B", retroceder]
        ])
        return Array.from(comandos).map(caracterDeComando => {
            if (!comandosSegunCaracter.has(caracterDeComando)) {
                throw new Error("Comando Invalido");
            }
            return comandosSegunCaracter.get(caracterDeComando);
        });
    }
}

const comandoGirarIzquierda = {
    ejcutarSobre(ubicacion){
        ubicacion.girar("L");
    }
}
const comandoGirarDerecha = {
    ejcutarSobre(ubicacion){
        ubicacion.girar("R");
    }
}
const avanzar = {
    ejcutarSobre(ubicacion){
        ubicacion.desplazar("F");
    }
}
const retroceder = {
    ejcutarSobre(ubicacion){
        ubicacion.desplazar("B");
    }
}