module.exports = class Mondongo {
    _joulesPorGramo : number = 100;
    _cantidadDeGramos:number;
constructor(cantidadDeGramos){
    this._cantidadDeGramos = cantidadDeGramos
}

cantidadDeJoules(){
    return this._cantidadDeGramos * this._joulesPorGramo
}
}