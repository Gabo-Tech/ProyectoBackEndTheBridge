const { Cesta, Mago, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const CestaController = {
  //Relación de 
  create(req, res) {
    Cesta.create({ ...req.body })
      .then((cesta) =>
        res.status(201).send({ message: "Publicación creada con éxito", cesta })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Cesta.findAll({
      include: [Mago.name],
    })
      .then((cestas) => res.send(cestas))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las publicaciones",
        });
      });
  },
  getById(req, res) {
    Cesta.findByPk(req.params.id, {
      include: [Mago],
    })
      .then((cesta) => res.send(cesta))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar la publicación",
        });
      });
  },
  getByName(req, res) {
    Cesta.findAll({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [Mago],
    })
      .then((cesta) => res.send(cesta))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar la publicación",
        });
      });
  },
  async delete(req, res) {
    await Cesta.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("La publicación ha sido eliminada con éxito");
  },
};

module.exports = CestaController;