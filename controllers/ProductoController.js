const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const ProductoController = {
  create(req, res) {
    Producto.create({ ...req.body })
      .then((producto) =>
        res.status(201).send({ message: "Producto creado con éxito", producto })
      )
      .catch(console.error);
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
    Producto.findByPk(req.params.id, {
      include: [Categoria],
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
    Producto.findAll({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [Categoria],
    })
      .then((producto) => res.send(producto))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },
  async delete(req, res) {
    await Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("El producto ha sido eliminado con éxito");
  },
};

module.exports = ProductoController;