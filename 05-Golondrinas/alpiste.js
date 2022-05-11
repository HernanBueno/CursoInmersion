module.exports = class Alpiste {
    _joulesPorGramo = 4;
constructor(cantidadDeGramos){
    this._cantidadDeGramos = cantidadDeGramos
}

cantidadDeJoules(){
    return this._cantidadDeGramos * this._joulesPorGramo
}
}