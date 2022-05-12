import { CalendarioDeFeriados, SABADO, DOMINGO, VEINTEDEABRILDEDOSMILDOCE } from "./calendario";

test("al indicar que un día de la semana es feriado, las fechas con ese día de la semana son feriados", () => {
    const calendario = new CalendarioDeFeriados();
    const unDomingo = new Date(2022, 4, 8);

    calendario.agregarDiaDeLaSemanaFeriado(DOMINGO);

    expect(calendario.esFeriado(unDomingo)).toEqual(true);
});

test("de manera predeterminada, una fecha no es feriado", () => {
    const calendario = new CalendarioDeFeriados();
    const unLunes = new Date(2022, 4, 16);

    expect(calendario.esFeriado(unLunes)).toEqual(false);
});

test("puede haber más de un día de la semana feriado", () => {
    const calendario = new CalendarioDeFeriados();
    const unSabado = new Date(2022, 4, 7);
    const unDomingo = new Date(2022, 4, 8);

    calendario.agregarDiaDeLaSemanaFeriado(SABADO);
    calendario.agregarDiaDeLaSemanaFeriado(DOMINGO);

    expect(calendario.esFeriado(unSabado)).toEqual(true);
    expect(calendario.esFeriado(unDomingo)).toEqual(true);
});


test("dia feriado de calendario fecha fija", () => {
    const calendario = new CalendarioDeFeriados();
    const primeroDeEnero = new Date(2021, 0, 1);
    expect(calendario.esFeriado(primeroDeEnero)).toEqual(true);
    
});
test("dia feriado de calendario agregado, fecha no fija", () => {
    const calendario = new CalendarioDeFeriados();
    const carnavalDiaUno = new Date(2022, 1, 28);
    const carnavalDiaDos = new Date(2022, 2, 1);
    const CARNAVALDIAUNO = {'dia':28, 'mes':1}
    const CARNAVALDIADOS = {'dia':1, 'mes':2}
    calendario.agregarDiaFeriadoEnUnMes(CARNAVALDIAUNO)
    calendario.agregarDiaFeriadoEnUnMes(CARNAVALDIADOS)
    expect(calendario.esFeriado(carnavalDiaUno)).toEqual(true);
    expect(calendario.esFeriado(carnavalDiaDos)).toEqual(true);
});

test("dia feriado de especifico", () => {
    const calendario = new CalendarioDeFeriados();
    const veinteDeAbrilDeDosMilDoce = new Date(2012, 3, 20);
    
    calendario.agregarDiaFeriadoEspecifico(VEINTEDEABRILDEDOSMILDOCE)
    expect(calendario.esFeriado(veinteDeAbrilDeDosMilDoce)).toEqual(true);
    
});

