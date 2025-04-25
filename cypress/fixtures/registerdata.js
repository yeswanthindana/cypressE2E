const { faker } = require('@faker-js/faker');

module.exports = {
  firstName: faker.person.firstName(),
  lastName: 'Smithee',
  email: faker.internet.email(),
  telephone: faker.phone.number('##########'),
  password: 'SecurePass123!',
  confirmPassword: 'SecurePass123!',
};
