const { Cesta, Pedido, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const CestaController = {
  create(req, res) {
    Cesta.create({ ...req.body })
      .then((pedido) =>
        res.status(201).send({ message: "Pedido creado con éxito", pedido })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Cesta.findAll({
      include: [Mago.name],
    })
      .then((pedidos) => res.send(pedidos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los pedidos",
        });
      });
  },
  getById(req, res) {
    Cesta.findByPk(req.params.id, {
      include: [Mago],
    })
      .then((pedido) => res.send(pedido))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el pedido",
        });
      });
  },
  async delete(req, res) {
    await Cesta.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("El pedido ha sido eliminada con éxito");
  },
};

module.exports = CestaController;