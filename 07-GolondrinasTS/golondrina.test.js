const Golondrina = require('./golondrina')
const Alcaucil = require('./alcaucil');
const Alpiste = require('./alpiste');
const Mondongo = require('./mondongo')




test("No se da comida a golondrina, se espera excepcion de falta de comida", () => {
    
    const golondrina1 = new Golondrina(45);
    expect(()=> golondrina1.comer(0)).toThrow(Error);
});
/*test("Se dan 5gramos de comida a golondrina, se espera aumento en energia a 70", () => {
    
    const golondrina1 = new Golondrina(45);
    golondrina1.comer(5, 5)
    expect(golondrina1.energiaGolondrina()).toEqual(70);
});*/

test("Se da una distancia invalida a golondrina, se espera excepcion de distancia erronea", () => {

    
    const golondrina1 = new Golondrina(45);

    expect(()=> golondrina1.volar(0)).toThrow(Error);
});
test("Se da una distancia en km a golondrina, se espera disminucion de energia en 10 - 1*km", () => {
   
    
    const golondrina1 = new Golondrina(45);
   
    golondrina1.volar(2)
  
    expect(golondrina1.energiaGolondrina()).toEqual(33);
});

test("Se da una distancia mayor a la que puede gastar con la energia que posee, se espera excepcion de sin suficiente energia", () => {
    
    const golondrina1 = new Golondrina(45);
    expect(()=> golondrina1.volar(36)).toThrow(Error);
});
test("Se dan gramos de alpiste a golondrina, se espera aumento en energia en 4joules x gramo", () => {
    
    const golondrina1 = new Golondrina(45);
    const alpiste = new Alpiste(5)
    golondrina1.comer(alpiste)
    expect(golondrina1.energiaGolondrina()).toEqual(65);
});
test("Se dan gramos de alcaucil a golondrina, se espera aumento en energia en 20joules x gramo", () => {
    
    const golondrina1 = new Golondrina(45);
    const alcaucil = new Alcaucil(5)
    golondrina1.comer(alcaucil)
    expect(golondrina1.energiaGolondrina()).toEqual(145);
});

test("Se dan gramos de mondongo a golondrina, se espera aumento en energia en 100joules x gramo", () => {
    
    const golondrina1 = new Golondrina(45);
    const mondongo = new Mondongo(5)
    golondrina1.comer(mondongo)
    expect(golondrina1.energiaGolondrina()).toEqual(545);
});
test("se envia mensaje haceLoQueQuieras a golondrina estando feliz, se espera que vuele 5km y disminuya su energia en 15 joules", () => {
    
    const golondrina1 = new Golondrina(45);
    const mondongo = new Mondongo(5)
    golondrina1.comer(mondongo)
    golondrina1.haceLoQueQuieras();
    expect(golondrina1.energiaGolondrina()).toEqual(530);
});
test("se envia mensaje haceLoQueQuieras a golondrina que esta debil, se espera que coma 20g de alpiste energia aumenta 80joules", () => {
    
    const golondrina1 = new Golondrina(45);
    golondrina1.haceLoQueQuieras();
    expect(golondrina1.energiaGolondrina()).toEqual(125);
});
test("se envia mensaje haceLoQueQuieras a  golondrina, se espera que no haga nada, la energia se mantiene igual", () => {
    
    const golondrina1 = new Golondrina(45);
    const alpiste = new Alpiste(2)
    golondrina1.comer(alpiste)
    golondrina1.haceLoQueQuieras();
    expect(golondrina1.energiaGolondrina()).toEqual(53);
});