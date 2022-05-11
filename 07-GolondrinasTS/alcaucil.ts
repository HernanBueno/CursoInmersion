module.exports = class Alcaucil {
    _joulesPorGramo : number = 20;
    _cantidadDeGramos:number;
constructor(cantidadDeGramos){
    this._cantidadDeGramos = cantidadDeGramos
}

cantidadDeJoules(){
    return this._cantidadDeGramos * this._joulesPorGramo
}
}