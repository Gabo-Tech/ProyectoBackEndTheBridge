const { Categoria, Producto } = require("../models/index.js");

const CategoriaController = {
  create(req, res) {
    Categoria.create({ ...req.body })
      .then((categoria) =>
        res.status(201).send({ message: "Categoría creada con éxito", categoria })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Categoria.findAll({
      include: [Producto],
    })
      .then((categorias) => res.send(categorias))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las categorías",
        });
      });
  },
  async delete(req, res) {
    try {
      await Categoria.destroy({
        where: {
          id: req.params.id,
        },
      });
      await Producto.destroy({
        where: {
          CategoriaId: req.params.id,
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
    await Categoria.update(
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