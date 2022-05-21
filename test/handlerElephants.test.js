const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Should return 4 if handlerElephants is passed with "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Should return an array with the name of all elephants if handlerElephants is passed with "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Should return a number close to 10.5 if handlerElephants is passed with "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Should return null if handlerElephants is passed with an invalid first param', () => {
    expect(handlerElephants('any')).toBeNull();
  });
  it('Should return undefined if handlerElephants is passed with no params', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Should return "Parâmetro inválido, é necessário uma string" when handlerElephants param is not a string ', () => {
    expect(handlerElephants(123)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('Should return 5 if handlerElephants is called with param popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Should return 4 if handlerElephants is called with param count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
});
