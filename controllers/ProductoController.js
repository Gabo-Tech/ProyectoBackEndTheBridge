const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];


const ProductoController = {
  create(req, res) {
    if(!req.body.nombre =="" && !req.body.precio == "" && !req.body.CategoryId == ""){
      console.log(req.body)
      Product.create({ ...req.body })
        .then((producto) =>
          res.status(201).send({ message: "Producto creado con éxito", producto })
        )
        .catch(console.error);
    } else {
      console.log("no hay datos");
      res.status(201).send({ message: "Somos magos pero no tanto" });
    }
  },
  getAll(req, res) {
    Product.findAll({
      include:[Category]
    })
      .then(productos => res.send(productos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },
  getById(req, res) {
    Product.findByPk(req.params.id, {
      include: [Category],
    })
      .then((producto) => res.send(producto))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },

  getByPrice(req, res) {
    Product.findAll({
      where: {
        precio: {
          [Op.eq]: `${req.params.precio}`,
        },
      },
      order: [
      
        ['precio', 'DESC']],
    
    })
      .then((producto) => res.send(producto))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },


  getByPriceDesc(req, res) {
    if(req.params.precio==undefined||req.params.precio=={}){
      req.params.precio=100000000;
    }
    Product.findAll({
      where: {
        precio: {
          [Op.lte]: `${req.params.precio}`,
        },
      },
      order: [
      
        ['precio', 'DESC']],
    
    })
      .then((producto) => res.send(producto))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },

  getByName(req, res) {
    Product.findAll({
      where: {
        nombre: {
          [Op.like]: `${req.params.title}`,
        },
      },
      include: [Category],
    })
      .then((producto) => res.send(producto))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },

  async update(req, res) {
    await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Producto mágico actualizado con éxito");
  },


  async delete(req, res) {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("El producto ha sido eliminado con éxito");
  },
};

module.exports = ProductoController;