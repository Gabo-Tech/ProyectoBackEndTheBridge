const { Mago, Cesta } = require("../models/index.js");

const MagoController = {
  create(req, res) {
    req.body.role = "Mago";
    Mago.create({ ...req.body })
      .then((Mago) =>
        res.status(201).send({ message: "Usuario mágico creado con éxito", Mago })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Mago.findAll({
      include: [Cesta],
    })
      .then((Magos) => res.send(Magos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar tu cesta",
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
      await Cesta.destroy({
        where: {
          MagoId: req.params.id,
        },
      });
      res.send("Avada Kedavra");
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message:
          "Ha habido un problema al eliminar el mago y su cesta mágica",
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
    res.send("Mago actualizado con éxito");
  },
};

module.exports = MagoController;