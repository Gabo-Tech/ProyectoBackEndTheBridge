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
      nombre: 'Sombrero piel de gnomo',
      precio: '5000',
      CategoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Dobby',
      precio: '100',
      CategoryId:3,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Sombrero de pluma',
      precio: '120',
      CategoryId:2,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Capa de cuero',
      precio: '340',
      CategoryId:3,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Capa de piel de salamandra',
      precio: '225',
      CategoryId:3,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Pocion de lágrima de muggle',
      precio: '475',
      CategoryId:4,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'costra de gnomo',
      precio: '875',
      CategoryId:4,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Pocion multijugos',
      precio: '665',
      CategoryId:4,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Sangre de unicornio',
      precio: '12525',
      CategoryId:4,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Greewknoc',
      precio: '100',
      CategoryId:3,
     createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      nombre: 'Aldella',
      precio: '100',
      CategoryId:3,
     createdAt: new Date(),
      updatedAt: new Date()
    },


  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
