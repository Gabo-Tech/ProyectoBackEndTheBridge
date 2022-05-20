const { Mago, Pedido } = require("../models/index.js");

const MagoController = {
  create(req, res) {
    Mago.create({ ...req.body })
      .then((mago) =>
        res.status(201).send({ message: "Usuario mágico creado con éxito", mago })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Mago.findAll({
      include: [Pedido],
    })
      .then((magos) => res.send(magos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los pedidos",
        });
      });
  },
  async delete(req, res) {
    try {
      await Mago.destroy({
        where: {
          id: req.params.id,
        },
      });
      await Pedido.destroy({
        where: {
          MagoId: req.params.id,
        },
      });
      res.send("Avada Kedavra");
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message:
          "Ha habido un problema al eliminar el mago y sus pedidos",
      });
    }
  },
  async update(req, res) {
    await Mago.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Usuario mágico actualizado con éxito");
  },
};

module.exports = MagoController;