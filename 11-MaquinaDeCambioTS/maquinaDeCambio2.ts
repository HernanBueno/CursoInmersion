function maquinaDeCambio(denominacion: Array<number>,monto:number):any {
    if (monto > 0){ 
        let cambio="";
        denominacion.sort((x,y)=> y-x);
        for (let i = 0 ; i <  denominacion.length; i++) { 
            let cantMonedas = Math.floor(monto / denominacion[i]); 
            monto -= cantMonedas*denominacion[i]; 
            cambio= i==0 ?`${denominacion[i]} => ${cantMonedas}` + cambio :  `${denominacion[i]} => ${cantMonedas}, ` + cambio; 
        }

        return cambio;
    }
    else{
        throw "Por favor ingrese un valor válido";
    }
}


module.exports = maquinaDeCambio;