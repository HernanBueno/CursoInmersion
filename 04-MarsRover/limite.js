module.exports = class Limite{
    
    #ancho;
    #alto;
    constructor(alto, ancho){
        this.#alto = alto;
        this.#ancho = ancho;
    }

    set ancho (value){
        this.#ancho = value;
    }
    set alto (value){
        this.#alto = value;
    }
    get ancho(){
        return this.#ancho;
    }
    get alto (){
        return this.#alto;
    }
}