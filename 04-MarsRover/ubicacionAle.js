//#region  coordenadas
class Oeste{
     
    girarALaDerecha(rover){
        rover.ubicacion.orientacion= new Norte();
    }
    girarALaIzquierda(rover){
        rover.ubicacion.orientacion = new Sur();
    }

    avanzar(rover){
        rover._x= (rover._x - 1 +rover.ubicacion.limite.ancho)%rover.ubicacion.limite.ancho;
   
       
    }
    retroceder(rover){
        rover._x= (rover._x + 1 +rover.ubicacion.limite.ancho)%rover.ubicacion.limite.ancho;
        
        
    }
    get nombre(){
        return "o";
    }
}

class Este{
     

    girarALaDerecha(rover){
        rover.ubicacion.orientacion = new Sur();
    }
    girarALaIzquierda(rover){
      
        rover.ubicacion.orientacion = new Norte();
    }
    avanzar(rover){
        rover._x= (rover._x + 1 +rover.ubicacion.limite.ancho)%rover.ubicacion.limite.ancho;
        
    }
    retroceder(rover){
        rover._x= (rover._x - 1 +rover.ubicacion.limite.ancho)%rover.ubicacion.limite.ancho;
    }
    get nombre(){
        return "e";
    }
}

class Sur{
     
    
    girarALaDerecha(rover){
        rover.ubicacion.orientacion = new Oeste();

    }
    girarALaIzquierda(rover){
        rover.ubicacion.orientacion = new Este();

    }
    avanzar(rover){
        rover.ubicacion.y= (rover.ubicacion.y - 1 +rover.ubicacion.limite.alto)%rover.ubicacion.limite.alto;
    }
    retroceder(rover){
        rover.ubicacion.y= (rover.ubicacion.y + 1 +rover.ubicacion.limite.alto)%rover.ubicacion.limite.alto;
    }
    get nombre(){
        return "s";
    }
}
class Norte{
     
    girarALaDerecha(rover){
        rover.ubicacion.orientacion = new Este();
    }
    girarALaIzquierda(rover){
        rover.ubicacion.orientacion = new Oeste();
    }

    avanzar(rover){
        rover.avanzarAlNorte();
       

    }


    retroceder(rover){
        rover.ubicacion.y= (rover.ubicacion.y - 1 +rover.ubicacion.limite.alto)%rover.ubicacion.limite.alto;
    }
    get nombre(){
        return "n";
    }
}

//#endregion
const sentidos = new Map([['s',new Sur()],['n',new Norte()],['e',new Este()],['o',new Oeste()]]);
module.exports = class Ubicacion{
    #x;
    #y;
    #orientacion;
    #limite
    constructor(x,y,sentido,limite){
        this.#limite = limite;
        this.#orientacion = sentidos.get(sentido);
        this.#x = x;
        this.#y = y;
    }

    set orientacion(value){
        this.#orientacion= value;
    }
    get orientacion(){
        return this.#orientacion;
    }
    get x (){
        return this.#x;
    }
    get y (){   
        return this.#y;
    }
    set x (value){
        this.#x = value;
    }
    set y (value){   
        this.#y = value;
    }
    get limite (){   
        return this.#limite;
    }
    set limite (value){   
        this.#limite = value;
    }

    moverAlNorte() {
        this.y = (this.y + 1 + this.limite.alto) % this.limite.alto;
    }
   
    
}






