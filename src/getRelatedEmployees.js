const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(gerenteID) {
  if (isManager(gerenteID)) {
    const gerentes = employees.filter(({ managers }) => managers.includes(gerenteID));

    return gerentes.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
