import { Pila } from "./pila";

test("Pila se crea con altura '0'", () => {
    const pilaNueva = new Pila();

    expect(pilaNueva.alturaPila()).toEqual(0);
});

test("Se Agrega elemento a pila, altura de pila se modifica", () => {
    const pilaNueva = new Pila();
    
    pilaNueva.pushPila(3)
    
    expect(pilaNueva.alturaPila()).toEqual(1);
});

test.only("Se consulta elemento tope, deberia devolver el ultimo agregado", () => {
    const pilaNueva = new Pila();
    pilaNueva.pushPila(3)
    pilaNueva.pushPila(5)
    pilaNueva.pushPila(8)


    expect(pilaNueva.topePila()).toEqual(8);
});
test("Se elimina ultimo elemento de pila, se espera el elemento", () => {
    //precondiciones que exista una pila, que tenga elementos. Postcondicion que devuelva el ultimo elemento y a su vez lo elimine
    const pilaNueva = new Pila();
    pilaNueva.pushPila(3)
    pilaNueva.pushPila(5)
    pilaNueva.pushPila(8)

    expect(pilaNueva.popPila()).toEqual(8);
    expect(pilaNueva.alturaPila()).toEqual(2);
    expect(pilaNueva.topePila()).toEqual(5);
});
//excepiones
test("Se elimina ultimo elemento de pila sin elementos, se espera excepcion", () => {
//precondiciones que exista una pila, que no tenga elementos. Postcondicion que devuelva excepcion 'No hay elementos para eliminar'
    const pilaNueva = new Pila();
    
    expect(()=>pilaNueva.popPila()).toThrow(Error);
    expect(pilaNueva.alturaPila()).toEqual(0);
});
test("Pila sin elementos se solicita tope, se espera excepcion", () => {
    const pilaNueva = new Pila();
    
    expect(()=>pilaNueva.topePila()).toThrow(Error);
});