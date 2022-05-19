const { Mago, Post } = require("../models/index.js");

const MagoController = {
  create(req, res) {
    req.body.role = "Mago";
    Mago.create({ ...req.body })
      .then((Mago) =>
        res.status(201).send({ message: "Usuario creado con éxito", Mago })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Mago.findAll({
      include: [Post],
    })
      .then((Magos) => res.send(Magos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las publicaciones",
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
      await Post.destroy({
        where: {
          MagoId: req.params.id,
        },
      });
      res.send("Erradicado. Con éxito.");
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message:
          "Ha habido un problema al eliminar el usuario y sus publicaciones",
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
    res.send("Usuario actualizado con éxito");
  },
};

module.exports = MagoController;