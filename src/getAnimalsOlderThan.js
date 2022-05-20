const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => (
  species.find(({ name: specie }) => specie === animal)
    .residents.every(({ age: residentAge }) => residentAge >= age)
);

module.exports = getAnimalsOlderThan;
