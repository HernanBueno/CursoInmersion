import { rot13 } from "./ejemplo.js";



test("Test de letra ", () => {
    expect(rot13('a')).toEqual('n');
    expect(rot13('b')).toEqual('o');
    expect(rot13('n')).toEqual('a');
});

test("Test de palabra ", () => {
    expect(rot13('hola')).toEqual('ubyn');
    expect(rot13('hola!')).toEqual('ubyn!');
});

test("Test de frase", () => {
    expect(rot13('hola! todo bien?')).toEqual('ubyn! gbqb ovra?');
});

test("Test de Mayusculas ", () => {
    expect(rot13('HOLA! Todo bien?')).toEqual('UBYN! Gbqb ovra?');
});


describe('Test de string vacio', () => {
    it('should throw an error', () => {
    expect(()=>rot13("")).toThrowError('No contiene letras ni caracteres')
})
})