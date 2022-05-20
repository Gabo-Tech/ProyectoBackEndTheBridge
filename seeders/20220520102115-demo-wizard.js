'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
      nombre: 'Harry alias el Potter',
      lehuza: 'dejaddetocarmelos@correomagico.com',
      hechizo:'spectropatronus',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Malfoy alias Milf, Draco',
      lehuza: 'measestodemisombra@slitherin.com',
      hechizo:'soytonto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Dumbledore',
      lehuza: 'hogwardsmola@tengolavaritamaspoderosaqueexiste.com',
      hechizo:'fenix',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Lord Voldemort',
      lehuza: 'voldy@tepartolavidasangresucia.com',
      hechizo:'Avada Kedavra',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Brugal Weasley',
      lehuza: 'ron@dondeestamirata.com',
      hechizo:'Scatters',
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
