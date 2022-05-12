export function rot13(stringIngresado:string) {
    const alfabetoMin = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    const alfabetoMayus = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];


    if(stringIngresado !== ""){
        let arrayDeCaracteres = Array.from(stringIngresado);
        let stringModificado = []
        arrayDeCaracteres.map((caracterIngresado) => {
            if (buscarCaracter(caracterIngresado, alfabetoMin)) {
                rotar(alfabetoMin, caracterIngresado, stringModificado);
            }else if(buscarCaracter(caracterIngresado, alfabetoMayus)){
                    rotar(alfabetoMayus, caracterIngresado, stringModificado);
                }else{
                    stringModificado.push(caracterIngresado);
                }
        });
        return stringModificado.join('');
    }else{
        throw new Error('No contiene letras ni caracteres')
    }
}


function buscarCaracter(caracterIngresado:string, alfabeto:string[]) {
    return alfabeto.find((caracter:string) => caracter == caracterIngresado);
}


function rotar(alfabeto:string[], caracterIngresado:string, stringModificado:any){
    const rotacion = 13;
    const indexLetra = alfabeto.findIndex((caracter) => caracter == caracterIngresado);
    if (indexLetra >= 0 && indexLetra <= rotacion - 1) {
        stringModificado.push(alfabeto[indexLetra + rotacion]);
    } else {
        stringModificado.push(alfabeto[indexLetra - rotacion]);
    }

}