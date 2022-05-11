import { devolverEnMonedas } from "./maquinaDeCambio.js";
const denominacion = [10,25, 1,5]

test("Vuelto de valor ingresado igual a 0", () => {
    expect(devolverEnMonedas(0, denominacion)).toEqual(expect.arrayContaining([ 0, 0, 0, 0]));
})

test("Vuelto de valor ingresado menor a 10", () => {
    expect(devolverEnMonedas(1, denominacion)).toEqual(expect.arrayContaining([ 1, 0, 0, 0]));
    expect(devolverEnMonedas(6, denominacion)).toEqual(expect.arrayContaining([ 1, 1, 0, 0]));
    expect(devolverEnMonedas(7, denominacion)).toEqual(expect.arrayContaining([ 2, 1, 0, 0]));
    expect(devolverEnMonedas(9, denominacion)).toEqual(expect.arrayContaining([ 4, 1, 0, 0]));
})

test("Vuelto de valor ingresado menor igual a 25", () => {
    
    expect(devolverEnMonedas(11, denominacion)).toEqual(expect.arrayContaining([ 1, 0, 1, 0]));
    expect(devolverEnMonedas(19, denominacion)).toEqual(expect.arrayContaining([ 4, 1, 1, 0]));
    expect(devolverEnMonedas(24, denominacion)).toEqual(expect.arrayContaining([ 4, 0, 2, 0]));
    expect(devolverEnMonedas(25, denominacion)).toEqual(expect.arrayContaining([ 0, 0, 0, 1]));
})


test("Vuelto de valor ingresado menor a 100", () => {
    expect(devolverEnMonedas(35, denominacion)).toEqual(expect.arrayContaining([ 0, 0, 0, 1]));
    expect(devolverEnMonedas(46, denominacion)).toEqual(expect.arrayContaining([ 1, 0, 2, 1]));
    expect(devolverEnMonedas(68, denominacion)).toEqual(expect.arrayContaining([ 3, 1, 1, 2]));
    expect(devolverEnMonedas(98, denominacion)).toEqual(expect.arrayContaining([ 3, 0, 2, 3]));
})
test("Vuelto de valor ingresado mayor a 100", () => {
    expect(devolverEnMonedas(100, denominacion)).toEqual(expect.arrayContaining([ 0, 0, 0, 4 ]));
    expect(devolverEnMonedas(150, denominacion)).toEqual(expect.arrayContaining([ 0, 0, 0, 6 ]));
    expect(devolverEnMonedas(314, denominacion)).toEqual(expect.arrayContaining([ 4, 0, 1, 12]));
    expect(devolverEnMonedas(455, denominacion)).toEqual(expect.arrayContaining([ 0, 1, 0, 18]))
});

