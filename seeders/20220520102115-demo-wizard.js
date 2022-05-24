'use strict';
const bcrypt = require("bcryptjs");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Magos', [
      {
      mago: 'Harry alias el Potter',
      lechuza: 'dejaddetocarmelos@correomagico.com',
      hechizo:bcrypt.hashSync('spectropatronus'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      mago: 'Malfoy alias Milf, Draco',
      lechuza: 'measestodemisombra@slitherin.com',
      hechizo:bcrypt.hashSync('soytonto'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      mago: 'Dumbledore',
      lechuza: 'hogwardsmola@tengolavaritamaspoderosaqueexiste.com',
      hechizo:bcrypt.hashSync('fenix'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mago: 'Lord Voldemort',
      lechuza: 'voldy@tepartolavidasangresucia.com',
      hechizo:bcrypt.hashSync('Avada Kedavra'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mago: 'Brugal Weasley',
      lechuza: 'ron@dondeestamirata.com',
      hechizo:bcrypt.hashSync('Scatters'),
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
