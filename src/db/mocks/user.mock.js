const { faker } = require('@faker-js/faker');

const generateUsers = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.image.avatar(),
  };
};

module.exports = { generateUsers };
