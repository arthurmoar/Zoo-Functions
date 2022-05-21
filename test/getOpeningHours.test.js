const getOpeningHours = require('../src/getOpeningHours');

const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('verifica se getOpeningHours tem o comportamento esperado sem paramentros', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('verifica se getOpeningHours tem o comportamento esperado para Monday', () => {
    expect(getOpeningHours('Monday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('verifica se getOpeningHours tem o comportamento esperado para Tuesday', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('verifica se getOpeningHours tem o comportamento esperado para Wednesday', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('verifica se getOpeningHours tem o comportamento esperado para Thu', () => {
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('verifica se getOpeningHours tem o comportamento esperado para abreviações erradas', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-XM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('verifica se getOpeningHours tem o comportamento esperado para hiras incorretas', () => {
    expect(() => getOpeningHours('Wednesday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('verifica se getOpeningHours tem o comportamento esperado para minutos errados', () => {
    expect(() => getOpeningHours('Wednesday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('verifica se getOpeningHours tem o comportamento esperado para horas incorretas', () => {
    expect(() => getOpeningHours('Wednesday', '29:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('verifica se getOpeningHours tem o comportamento esperado para horas incorretas', () => {
    expect(() => getOpeningHours('Wednesday', '09:70-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
