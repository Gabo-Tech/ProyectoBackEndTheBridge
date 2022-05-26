'use strict';
const bcrypt = require("bcryptjs");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Magos', [
      {
      mago: 'Harry alias el Potter',
      lechuza: 'Hedwid',
      hechizo:bcrypt.hashSync('spectropatronus'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      mago: 'Draco Milfoy',
      lechuza: 'Casper',
      hechizo:bcrypt.hashSync('soytonto'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      mago: 'Dumbledore',
      lechuza: 'Campanera',
      hechizo:bcrypt.hashSync('fenix'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mago: 'Lord Voldemort',
      lechuza: 'Cianuro',
      hechizo:bcrypt.hashSync('Avada Kedavra'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mago: 'Brugal Weasley',
      lechuza: 'Mimosona',
      hechizo:bcrypt.hashSync('Scatters'),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      mago: 'Germago',
      lechuza: 'Cannon',
      hechizo:bcrypt.hashSync('Leviosssaaaah'),
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
