module.exports = class Alpiste {
    _joulesPorGramo : number = 4;
    _cantidadDeGramos:number;
constructor(cantidadDeGramos){
    this._cantidadDeGramos = cantidadDeGramos
}

cantidadDeJoules():number{
    return this._cantidadDeGramos * this._joulesPorGramo
}
}


