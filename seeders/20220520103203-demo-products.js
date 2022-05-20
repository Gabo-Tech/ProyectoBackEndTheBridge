'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
      nombre: 'Nimbus 2000',
      precio: '2000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'La Saeta de Fuego',
      precio: '3000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Witchfart',
      precio: '10000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'La capa de invisibilidad',
      precio: '5000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Dobby',
      precio: '100',
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
