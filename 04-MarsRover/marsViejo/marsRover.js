
module.exports = class MarsRover{

    constructor(ubicacion){
        this.ubicacion = ubicacion;
        
    }

    mover(stringDeComandos) {

        this.comandosCorrespondientesA(stringDeComandos).forEach(comando=>comando.ejcutarSobre(this.ubicacion))
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