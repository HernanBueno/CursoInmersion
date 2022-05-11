module.exports = class Mondongo {
    _joulesPorGramo = 100;
constructor(cantidadDeGramos){
    this._cantidadDeGramos = cantidadDeGramos
}

cantidadDeJoules(){
    return this._cantidadDeGramos * this._joulesPorGramo
}
}