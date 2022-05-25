const { Category, Product, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const CategoriaController = {
  create(req, res) {
    if(!req.body.nombre ==""){
    Category.create({ ...req.body })
      .then((categoria) =>
        res.status(201).send({ message: "Categoría creada con éxito", categoria })
      )
      .catch(console.error);}
      else {
        console.log("no hay datos");
        res.status(201).send({ message: "Somos magos pero no tanto" });
      }
  },
  getAll(req, res) {
    Category.findAll({
      include: [Product],
    })
      .then((categorias) => res.send(categorias))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las categorías",
        });
      });
  },

  getById(req, res) {
    Category.findByPk(req.params.id)
      .then((pedido) => res.send(pedido))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al mirar la categoria",
        });
      });
  },


  getByName(req, res) {
    Category.findAll({
      where: {
        nombre: {
          [Op.like]: `${req.params.title}`,
        },
      },
      include: [Product],
    })
      .then((categoria) => res.send(categoria))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los categoriums",
        });
      });
  },

  async delete(req, res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      await Product.destroy({
        where: {
          CategoryId: req.params.id,
        },
      });
      res.send("Categoría eliminada");
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message:
          "Ha habido un problema al eliminar la categoría",
      });
    }
  },
  async update(req, res) {
    await Category.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Categoría actualizada con éxito");
  },
};

module.exports = CategoriaController;