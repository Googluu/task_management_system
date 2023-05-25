const { faker } = require('@faker-js/faker');

const generateTasks = () => {
  return {
    title: faker.person.jobTitle(),
    description: faker.lorem.text(),
  };
};

module.exports = { generateTasks };
