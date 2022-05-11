const MarsRover = require("./marsRover");
const Ubicacion = require("./ubicacion");
const Orientacion = require("./orientacion");


// test("Evaluando ubicacion inicial",()=>{
//     const orientacionInicial = new Orientacion("S");
//     const ubicacionInical = new Ubicacion(1,3,orientacionInicial);
//     const movil = new MarsRover(ubicacionInical);
//     expect(movil.ubicacion).toEqual(ubicacionInical);
// });


// test("test 01",()=>{
//     const orientacionInicial = new Orientacion("N");
//     const orientacionFinal = new Orientacion("E");
//     const ubicacionInicial = new Ubicacion(1,3,orientacionInicial);
//     const ubicacionFinal = new Ubicacion(3,5,orientacionFinal);
//     const movil = new MarsRover(ubicacionInicial);
//     movil.mover("FFRFF");
//     expect(movil.ubicacion).toEqual(ubicacionFinal);
// });


// test("Yendo al sur",()=>{
//     const orientacionInicial = new Orientacion("E");
//     const orientacionFinal = new Orientacion("S");
//     const ubicacionInicial = new Ubicacion(3,5,orientacionInicial);
//     const ubicacionFinal = new Ubicacion(5,3,orientacionFinal);
//     const movil = new MarsRover(ubicacionInicial);
//     movil.mover("FFRFF");
//     expect(movil.ubicacion).toEqual(ubicacionFinal);
// });

// test("Yendo al Oeste",()=>{
//     const orientacionInicial = new Orientacion("S");
//     const orientacionFinal = new Orientacion("W");
//     const ubicacionInicial = new Ubicacion(5,3,orientacionInicial);
//     const ubicacionFinal = new Ubicacion(-1,3,orientacionFinal);
//     const movil = new MarsRover(ubicacionInicial);
//     movil.mover("RFFFFFF");
//     expect(movil.ubicacion).toEqual(ubicacionFinal);
// });

// test("Yendo hacia el Sur",()=>{
//     const orientacionInicial = new Orientacion("W");
//     const orientacionFinal = new Orientacion("S");
//     const ubicacionInicial = new Ubicacion(-1,3,orientacionInicial);
//     const ubicacionFinal = new Ubicacion(0,0,orientacionFinal);
//     const movil = new MarsRover(ubicacionInicial);
//     movil.mover("BLFFF");
//     expect(movil.ubicacion).toEqual(ubicacionFinal);
// });




/*

test("Excepcion lanzanda en caso de recibir un comando distinto del esperado",()=>{
    const orientacionInicial = new Orientacion("W");
    const ubicacionInicial = new Ubicacion(-1,3,orientacionInicial);
    const movil = new MarsRover(ubicacionInicial);
    
    expect(()=>movil.mover("J")).toThrow(Error);
});
test("Excepcion lanzanda en caso de recibir un comando en minuscula",()=>{
    const orientacionInicial = new Orientacion("W");
    const ubicacionIncial = new Ubicacion(-1,3,orientacionInicial);
    const movil = new MarsRover(ubicacionIncial);
    
    expect(()=>movil.mover("l")).toThrow(Error);
});

test("Movimiento en el eje X",()=>{

    const orientacionInicial = new Orientacion("E");
    const orientacionFinal = new Orientacion("E");
    const ubicacionInicial = new Ubicacion(9,3,orientacionInicial, 10);
    const ubicacionFinal = new Ubicacion(9,3,orientacionFinal, 10);
    const movil = new MarsRover(ubicacionInicial);
    movil.mover("FFFFFFFFFFFFFFFFFFFF");

    expect(movil.ubicacion).toEqual(ubicacionFinal);
});
test("Movimiento en el eje Y",()=>{
   
    const orientacionInicial = new Orientacion("E");
    const orientacionFinal = new Orientacion("N");
    const ubicacionInicial = new Ubicacion(10,3,orientacionInicial, 10);
    const ubicacionFinal = new Ubicacion(10,3,orientacionFinal, 10);
    const movil = new MarsRover(ubicacionInicial);
    movil.mover("LFFFFFFFFFFFFFFFFFFFF");

    expect(movil.ubicacion).toEqual(ubicacionFinal);
});
test("Movimiento en ambos ejes",()=>{
    
    const orientacionInicial = new Orientacion("E");
    const orientacionFinal = new Orientacion("W");
    const ubicacionInicial = new Ubicacion(9,3,orientacionInicial, 10);
    const ubicacionFinal = new Ubicacion(9,0,orientacionFinal, 10);
    const movil = new MarsRover(ubicacionInicial);
    movil.mover("LFFFFFFFFFFFFFFFFFFFFLFFFFFFFFFFFF");

    expect(movil.ubicacion).toEqual(ubicacionFinal);
});
test("Cambiando Tamano de plano 1",()=>{
    
    const orientacionInicial = new Orientacion("E");
    const orientacionFinal = new Orientacion("W");
    const ubicacionInicial = new Ubicacion(10,3,orientacionInicial, 15);
    const ubicacionFinal = new Ubicacion(0,6,orientacionFinal, 15);
    const movil = new MarsRover(ubicacionInicial);
    movil.mover("LFFFFFFFFFFFFFFFFFFFFLFFFFFFFFFFFF");

    expect(movil.ubicacion).toEqual(ubicacionFinal);
});

test("Cambiando Tamano de plano",()=>{
    
    const orientacionInicial = new Orientacion("E");
    const orientacionFinal = new Orientacion("E");
    const ubicacionInicial = new Ubicacion(0,1,orientacionInicial, 15);
    const ubicacionFinal = new Ubicacion(0,4,orientacionFinal, 15);
    const movil = new MarsRover(ubicacionInicial);
    movil.mover("FFF");

    expect(movil.ubicacion).toEqual(ubicacionFinal);
});*/