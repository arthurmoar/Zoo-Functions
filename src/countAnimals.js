const { species } = require('../data/zoo_data');

const getAnimals = () => {
  const countBySpecie = {};

  species.forEach(({ name, residents }) => {
    countBySpecie[name] = residents.length;
  });

  return countBySpecie;
}

const countAnimals = (animal) => {
  if (!animal) return getAnimals();

  const { residents } = species.find(({ name }) => name === animal.specie);

  const getByGender = residents.filter(({ sex }) => sex === animal.sex).length;

  return (animal.sex) ? getByGender : residents.length;
}

module.exports = countAnimals;
