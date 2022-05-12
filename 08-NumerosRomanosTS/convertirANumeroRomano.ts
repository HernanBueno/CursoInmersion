export function convertirANumeroRomano(unEntero: number){
    return convertirCentenas(unEntero);
}

function convertirUnidades(unEntero:number) {
    if (unEntero <= 3) {
        return "I".repeat(unEntero);
    }

    if (unEntero === 4) {
        return "IV";
    }
    
    if (unEntero >= 5 && unEntero <= 8) {
        return "V" + "I".repeat(unEntero - 5);
    }

    if (unEntero === 9) {
        return "IX";
    }
}

function convertirDecenas(unEntero:number) {

    const decenas = Math.floor(unEntero / 10);
    const unidades = unEntero - 10 * decenas;

    if ( decenas <= 3 ) {
        return "X".repeat(decenas) + convertirUnidades(unidades);
    } 
    if (decenas === 4)  {
        return "XL" + convertirUnidades(unidades);
    } 
    if (decenas >= 5 && decenas <= 8) {
        return "L" +'X'.repeat( decenas - 5 ) + convertirUnidades(unidades);
    }
    if (decenas === 9) {
        return 'XC' + convertirUnidades(unidades);
    } 
       
}

function convertirCentenas(unEntero:number){
    let centena : number = Math.trunc(unEntero/100);
    let resto: number= unEntero%100
    if(unEntero >= 1 && unEntero <= 99){
        return convertirDecenas(unEntero);
    }
    if (unEntero >= 100 && unEntero <= 399) {
        return 'C'.repeat(centena) + convertirDecenas(resto);
    } 
    
    if (unEntero >= 400 && unEntero <= 499) {
        return 'CD' + convertirDecenas(resto);
    } 
    
    if (unEntero >= 500 && unEntero <= 899) {
        return 'D'+ 'C'.repeat(centena -5) + convertirDecenas(resto);
    } 
    
    if (unEntero >= 900 && unEntero <= 999) {
        return 'CM' + convertirDecenas(resto);
    } 

}