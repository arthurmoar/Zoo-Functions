const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id))
}

// console.log(getSpeciesByIds())

module.exports = getSpeciesByIds;
