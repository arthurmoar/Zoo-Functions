const { employees, species } = require('../data/zoo_data');

const oldestAnimalAge = ((animals) => {
  const oldestAnimal = animals.sort((a, b) => b.age - a.age);
  return oldestAnimal[0].age;
});

function getOldestFromFirstSpecies(employeesId) {
  const firstSpecie = employees.find(({ id }) => id === employeesId).responsibleFor[0];

  const { residents } = species.find(({ id }) => id === firstSpecie);

  const ageOldestAnimal = oldestAnimalAge(residents);

  const { name, sex, age } = residents.find((resident) => resident.age === ageOldestAnimal);

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
