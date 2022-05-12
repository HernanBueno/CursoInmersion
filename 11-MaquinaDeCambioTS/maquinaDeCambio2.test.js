const maquinaDeCambio = require("./maquinaDeCambio2");
//no olvidar caso particular del 0
test("caso excepción del cero", () => {
    expect(() => maquinaDeCambio(0)).toThrowError("Por favor ingrese un valor válido");
}); 

test("Cambios con monedas de 1", () => {
    // expect(maquinaDeCambio([1,5,10,25],1)).toEqual("25 => 0, 10 => 0, 5 => 0, 1 => 1");
    expect(maquinaDeCambio([1,5,10,25],2)).toEqual("1 => 2, 5 => 0, 10 => 0, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],3)).toEqual("1 => 3, 5 => 0, 10 => 0, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],4)).toEqual("1 => 4, 5 => 0, 10 => 0, 25 => 0");
}); 
test("Cambio con monedas de 1 y/o 5 ", () => {
    expect(maquinaDeCambio([1,5,10,25],5)).toEqual("1 => 0, 5 => 1, 10 => 0, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],6)).toEqual("1 => 1, 5 => 1, 10 => 0, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],7)).toEqual("1 => 2, 5 => 1, 10 => 0, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],8)).toEqual("1 => 3, 5 => 1, 10 => 0, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],9)).toEqual("1 => 4, 5 => 1, 10 => 0, 25 => 0");
});
test("Cambio con monedas de 1, 5 y/o 10", () => {
    expect(maquinaDeCambio([1,5,10,25],10)).toEqual("1 => 0, 5 => 0, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],11)).toEqual("1 => 1, 5 => 0, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],12)).toEqual("1 => 2, 5 => 0, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],13)).toEqual("1 => 3, 5 => 0, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],14)).toEqual("1 => 4, 5 => 0, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],15)).toEqual("1 => 0, 5 => 1, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],16)).toEqual("1 => 1, 5 => 1, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],17)).toEqual("1 => 2, 5 => 1, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],18)).toEqual("1 => 3, 5 => 1, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],19)).toEqual("1 => 4, 5 => 1, 10 => 1, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],20)).toEqual("1 => 0, 5 => 0, 10 => 2, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],21)).toEqual("1 => 1, 5 => 0, 10 => 2, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],22)).toEqual("1 => 2, 5 => 0, 10 => 2, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],23)).toEqual("1 => 3, 5 => 0, 10 => 2, 25 => 0");
    expect(maquinaDeCambio([1,5,10,25],24)).toEqual("1 => 4, 5 => 0, 10 => 2, 25 => 0");
});
test("Cambio con monedas de 1, 5, 10 y/o 25", () => {
    expect(maquinaDeCambio([1,5,10,25],25)).toEqual("1 => 0, 5 => 0, 10 => 0, 25 => 1");
    expect(maquinaDeCambio([1,5,10,25],26)).toEqual("1 => 1, 5 => 0, 10 => 0, 25 => 1");
    expect(maquinaDeCambio([1,5,10,25],27)).toEqual("1 => 2, 5 => 0, 10 => 0, 25 => 1");
    expect(maquinaDeCambio([1,5,10,25],28)).toEqual("1 => 3, 5 => 0, 10 => 0, 25 => 1");
    expect(maquinaDeCambio([1,5,10,25],29)).toEqual("1 => 4, 5 => 0, 10 => 0, 25 => 1");
});
test("Cambio con monedas de 5, 10, 25 y/o 100", () => {
    expect(maquinaDeCambio([5,10,25,100],255)).toEqual("5 => 1, 10 => 0, 25 => 2, 100 => 2");
});
test("Cambio con monedas de 12, 42, 64 y/o 123", () => {
    expect(maquinaDeCambio([10,20,50,150],600)).toEqual("10 => 0, 20 => 0, 50 => 0, 150 => 4");
});

test("Denominacion desordenada", () => {
    expect(maquinaDeCambio([20,10,100],600)).toEqual("10 => 0, 20 => 0, 100 => 6");
});