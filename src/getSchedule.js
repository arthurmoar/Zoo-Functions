const { hours, species } = require('../data/zoo_data');

const generateSchedule = () => {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const officeHour = hours[day];
    const { open, close } = officeHour;
    const getDay = species.filter(({ availability }) => availability.includes(day));
    const namesDay = getDay.map(({ name }) => name);
    const hoursDay = {};

    hoursDay[day] = {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: namesDay,
    };

    Object.assign(schedule, hoursDay);
  });

  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
}

const filterDay = ((scheduleTarget) => {
  const scheduleOfDay = {};
  const scheduleSelected = generateSchedule()[scheduleTarget];

  scheduleOfDay[scheduleTarget] = scheduleSelected;

  return scheduleOfDay;
});

const getAnimal = ((animal) => {
  return species.find(({ name }) => name === animal).availability;
});

function getSchedule(scheduleTarget) {
  const week = Object.keys(hours);
  const animal = species.map(({ name }) => name);
  const catWeekday = week.includes(scheduleTarget);
  const catAnimal = animal.includes(scheduleTarget);

  if (catWeekday) return filterDay(scheduleTarget);
  if (catAnimal) return getAnimal(scheduleTarget);

  return generateSchedule();
}

module.exports = getSchedule;
