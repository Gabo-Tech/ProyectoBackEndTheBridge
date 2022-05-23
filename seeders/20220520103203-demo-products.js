'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
      nombre: 'Nimbus 2000',
      precio: '2000',
      CategoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'La Saeta de Fuego',
      precio: '3000',
      CategoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Witchfart',
      precio: '10000',
   
      CategoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'La capa de invisibilidad',
      precio: '5000',
      CategoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Dobby',
      precio: '100',
 
      CategoryId:1,
     createdAt: new Date(),
      updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
