const { Pedidos, Cesta, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const PostController = {
  create(req, res) {
    Pedidos.create({ ...req.body })
      .then((post) =>
        res.status(201).send({ message: "Publicación creada con éxito", post })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Pedidos.findAll({
      include: [Cesta.name],
    })
      .then((posts) => res.send(posts))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las publicaciones",
        });
      });
  },
  getById(req, res) {
    Pedidos.findByPk(req.params.id, {
      include: [Cesta],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar la publicación",
        });
      });
  },
  getByName(req, res) {
    Pedidos.findAll({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [Cesta],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar la publicación",
        });
      });
  },
  async delete(req, res) {
    await Pedidos.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("La publicación ha sido eliminada con éxito");
  },
};

module.exports = PostController;