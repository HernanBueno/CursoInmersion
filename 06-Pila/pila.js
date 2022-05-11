export class Pila{
    constructor(){
        this._elementosPila = []
    }
    alturaPila(){
        return this._elementosPila.length
    }
    pushPila(elementoAAgregar){
        this._elementosPila = [...this._elementosPila, elementoAAgregar];
        this.alturaPila
    }
    topePila(){
        
        this.verificarEstado(this).hacer()
        return this._elementosPila[this.alturaPila()-1]
    }
    verificarEstado(){
        return estados.find(estado =>estado.chequearEstado(this))
    }

   // devolverPosibleTope(){
//return posiblesTopes.find(posibleTope=> posibleTope.verificarPilaVacia(this))
  //  }


    verificarPilaVacia() {
        return this.alturaPila() <= 0;
    }
    

    popPila(){
        
        this.verificarEstado(this).hacer()
        return this._elementosPila.pop()
    }

    
}
const estados = [pilaNoVacia, pilaVacia]
const pilaVacia ={
    hacer() {
        throw new Error('No hay elementos en la pila');
    }
, 
    chequearEstado(pila){
        return pila.verificarPilaVacia()
    }
}
const pilaNoVacia ={
    hacer() {
    //no hace nada
    }
, 
    chequearEstado(pila){
        return !pila.verificarPilaVacia()
    }
}
