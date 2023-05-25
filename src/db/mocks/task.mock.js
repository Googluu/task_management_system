const { faker } = require('@faker-js/faker');

const generateTasks = () => {
  return {
    id: faker.string.uuid(),
    title: faker.person.jobTitle(),
    description: faker.lorem.text(),
  };
};

module.exports = { generateTasks };
