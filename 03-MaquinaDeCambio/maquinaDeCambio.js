export function devolverEnMonedas(montoACambiar, denominacionDeMonedas) {

    let cantidadDeMonedas=[0,0,0,0];

    denominacionDeMonedas.sort((a,b)=> a-b)
    let ultimaPosicion = denominacionDeMonedas.length

    while(montoACambiar > 0){
        for ( ultimaPosicion > 0; ultimaPosicion--;) {
            if(montoACambiar >= denominacionDeMonedas[ultimaPosicion]){
                cantidadDeMonedas[ultimaPosicion] =  Math.floor(montoACambiar/denominacionDeMonedas[ultimaPosicion]);
                montoACambiar = montoACambiar % denominacionDeMonedas[ultimaPosicion];
            }
        }
    }



    //console.log(cantidadDeMonedas)
    return cantidadDeMonedas
}