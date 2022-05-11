const Limite = require("./limite");
const MarsRover = require("./mars");
const Ubicacion = require("./ubicacionAle");

test("Partiendo con orientacion al norte giro a la derecha, marsrover finaliza con orientacion este", ()=>{
 //given
    const r = new MarsRover(new Ubicacion(1,1,'n'));
    //when
    r.movilizar('r');
     //then
    expect(r.nombreOrientacion()).toEqual('e');

});

test("Partiendo con orientacion al norte giro a la izquierda, marsrover finaliza con orientacion oeste", ()=>{
 //given
    const r = new MarsRover(new Ubicacion(1,1,'n'));
    //when
    r.movilizar('l');
     //then
    expect(r.nombreOrientacion()).toEqual('o');

});

test("Partiendo con orientacion al oeste giro a la derecha, marsrover finaliza con orientacion norte", ()=>{
 //given
    const r = new MarsRover(new Ubicacion(1,1,'o'));
    //when
    r.movilizar('r');
     //then
    expect(r.nombreOrientacion()).toEqual('n');

});

test("partiendo con orientacion sur giro a la derecha, marsover finaliza con orientacion oeste", ()=>{
 //given
    const r = new MarsRover(new Ubicacion(1,1,'s'));
    //when
    r.movilizar('r');
     //then
    expect(r.nombreOrientacion()).toEqual('o');

});

test("partiendo con orientacion este giro a la derecha, marsrover finaliza con orientacion sur", ()=>{
     //given
    const r = new MarsRover(new Ubicacion(1,1,'e'));
    //when
    r.movilizar('r');
     //then
    expect(r.nombreOrientacion()).toEqual('s');

});

test("partiendo con orientacion norte avanzo una posicion, marsrover finaliza con una posicion modificada en 1 en orientacion norte", ()=>{
     //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(1,1,'n',limite);
    const r = new MarsRover(ubicacion);
    //when
    r.movilizar('f');
     //then
    expect(r.ubicacionY()).toEqual(2);

});

test("partiendo con orientacion este avanzo una posicion , marsrover finaliza con una posicion modificada en 1 en orientacion norte", ()=>{
    //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(1,1,'e',limite);
    const r = new MarsRover(ubicacion);
    //when
    r.movilizar('f');
    //then
    expect(r.ubicacionX()).toEqual(2);

});
test("partiendo con orientacion norte retrocedo una posicion, marsrover finaliza con una posicion modificada en 1 en orientacion sur", ()=>{
    //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(1,2,'n',limite);
    const r = new MarsRover(ubicacion);
    //when
    r.movilizar('b');
    //then
    expect(r.ubicacionY()).toEqual(1);

});

test("partiendo con orientacion este retrocedo una posicion, marsrover finaliza con una posicion modificada en 1 en orientacion oeste", ()=>{
    //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(2,1,'e',limite);
    const r = new MarsRover(ubicacion);
    //when
    r.movilizar('b');
    //then 
    expect(r.ubicacionX()).toEqual(1);

});

test("Se ingresa comando fuera de los permitidos, devuelve una excepcion", ()=>{
    //given
    const r = new MarsRover(new Ubicacion(1,2,'n'));
            //when            //then          
    expect(()=>r.movilizar('w')).toThrow(Error) ;

});


test("Partiendo con sentido este se avanza una posicion superando el limite dado, se espera que el marsrover vuelva al punto inicial en eje X", ()=>{
   //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(9,1,'e',limite);
    const r = new MarsRover(ubicacion);
    //when
    r.movilizar('f');
   //then
    expect(r.ubicacionX()).toEqual(0);

});

test("Partiendo con sentido este se retrocede una posicion superando el limite minimo dado, se espera que el marsrover vuelva al punto maximo en eje X", ()=>{
   //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(0,1,'e',limite);
    const r = new MarsRover(ubicacion);
   //when
    r.movilizar('b');
    //then
    expect(r.ubicacionX()).toEqual(9);

});

test("Partiendo con sentido norte se avanza una posicion superando el limite dado, se espera que el marsrover vuelva al punto inicial en eje Y", ()=>{
    //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(1,9,'n',limite);
    const r = new MarsRover(ubicacion);
   //when
    r.movilizar('f');
    //then
    expect(r.ubicacionY()).toEqual(0);

});
test("Partiendo con sentido norte se retrocede una posicion superando el limite minimo dado, se espera que el marsrover vuelva al punto maximo en eje Y", ()=>{
    //given
    const limite =  new Limite(10,10);
    const ubicacion = new Ubicacion(1,0,'n',limite);
    const r = new MarsRover(ubicacion);
    //when
    r.movilizar('b');
   //then
    expect(r.ubicacionY()).toEqual(9);

});

