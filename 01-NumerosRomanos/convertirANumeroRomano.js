export function convertirANumeroRomano(unEntero) {
    return convertirCentenas(unEntero);
}

function convertirUnidades(unEntero) {
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

function convertirDecenas(unEntero) {

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

function convertirCentenas(unEntero){

    if(unEntero >= 1 && unEntero <= 99){
        return convertirDecenas(unEntero);
    }
    if (unEntero >= 100 && unEntero <= 199) {
        return 'C' + convertirDecenas(unEntero - 100);
    } 
    if (unEntero >= 200 && unEntero <= 299) {
        return 'CC' + convertirDecenas(unEntero - 200);
    } 
    
    if (unEntero >= 300 && unEntero <= 399) {
        return 'CCC' + convertirDecenas(unEntero - 300);
    } 
    
    if (unEntero >= 400 && unEntero <= 499) {
        return 'CD' + convertirDecenas(unEntero - 400);
    } 
    
    if (unEntero >= 500 && unEntero <= 599) {
        return 'D' + convertirDecenas(unEntero - 500);
    } 
    
    if (unEntero >= 600 && unEntero <= 699) {
        return 'DC' + convertirDecenas(unEntero - 600);
    } 

    if (unEntero >= 700 && unEntero <= 799) {
        return 'DCC' + convertirDecenas(unEntero - 700);
    } 

    if (unEntero >= 800 && unEntero <= 899) {
        return 'DCCC' + convertirDecenas(unEntero - 800);
    } 

    if (unEntero >= 900 && unEntero <= 999) {
        return 'CM' + convertirDecenas(unEntero - 900);
    } 

}