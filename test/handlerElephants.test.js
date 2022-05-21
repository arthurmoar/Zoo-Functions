const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Deve returnar 4 se handlerElephants for chamado com parametro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Deve returnar um array com o nome de todos os elefantes se handlerElephants for passada com "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Deve returnar um numero próximo de 10.5 se handlerElephants for passada com "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Deve returnar undefined se handlerElephants for passado sem parametros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Deve returnar 5 se handlerElephants for chamado com parametro popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Deve returnar "Parâmetro inválido, é necessário uma string" quando handlerElephants parametro não é uma string ', () => {
    expect(handlerElephants(123)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('Deve returnar null se handlerElephants for passado com um parametro invalido primeiro', () => {
    expect(handlerElephants('any')).toBeNull();
  });
});
