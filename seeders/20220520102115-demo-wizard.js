'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Magos', [
      {
      mago: 'Harry alias el Potter',
      lechuza: 'dejaddetocarmelos@correomagico.com',
      hechizo:'spectropatronus',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      mago: 'Malfoy alias Milf, Draco',
      lechuza: 'measestodemisombra@slitherin.com',
      hechizo:'soytonto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      mago: 'Dumbledore',
      lechuza: 'hogwardsmola@tengolavaritamaspoderosaqueexiste.com',
      hechizo:'fenix',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mago: 'Lord Voldemort',
      lechuza: 'voldy@tepartolavidasangresucia.com',
      hechizo:'Avada Kedavra',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mago: 'Brugal Weasley',
      lechuza: 'ron@dondeestamirata.com',
      hechizo:'Scatters',
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
