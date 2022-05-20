const { Pedido, Mago, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const PedidoController = {
  create(req, res) {
    Pedido.create({ ...req.body })
      .then((pedido) =>
        res.status(201).send({ message: "Pedido mágico creado con éxito", pedido })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Pedido.findAll({
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
    Pedido.findByPk(req.params.id, {
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
    await Pedido.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("El pedido ha sido eliminado con éxito");
  },
};

module.exports = PedidoController;