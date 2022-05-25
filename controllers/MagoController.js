const { Mago,  Pedido, Token, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const { Op } = Sequelize;

const MagoController = {
  create(req, res) {
    if(!req.body==""||!req.body=={}){
      req.body.role = "mago"
    const hechizo = bcrypt.hashSync(req.body.hechizo,10)
    Mago.create({...req.body, hechizo:hechizo })
    .then(mago => res.status(201).send({ message: 'Usuario mágico creado con éxito', mago }))
    .catch(console.error)
    } else {
      console.log("no hay datos");
      res.status(201).send({ message: "Somos magos pero no tanto" });
    }
    
  },
  login(req,res){
    Mago.findOne({
    where:{
    mago:req.body.mago
    }
    }).then(mago=>{
    if(!mago){
    return res.status(400).send({message:" jajjaja me rio en tu cara"})
    }
    const isMatch = bcrypt.compareSync(req.body.hechizo, mago.hechizo);
    if(!isMatch){
    return res.status(400).send({message:"Mago o hechizo incorrectos"})
    }
    token = jwt.sign({ id: mago.id }, jwt_secret);
    Token.create({ token, MagoId: mago.id });
    res.send({ message: 'Bienvenid@' + mago.mago, mago, token });
    })
  },
  async logout(req, res) {
      try {
        await Token.destroy({
        where: {
        [Op.and]: [
        { MagoId: req.mago.id },
        { token: req.headers.authorization }
        ]
        }
        });
        res.send({ message: 'Desconectado con éxito' })
      } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Hubo un problema al tratar de desconectarte' })
      }
  },
  getAll(req, res) {
    
    Mago.findAll({
      include: [Pedido],
    })
      .then(magos => res.send(magos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los magos",
        });
      });
  },
  getById(req, res) {
    Mago.findByPk(req.params.id, {
      include: [Pedido]
    })
      .then((mago) => res.send(mago))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el mago",
        });
      });
  },
  getByName(req, res) {
    Mago.findAll({
      where: {
        mago: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [Pedido],
    })
      .then((mago) => res.send(mago))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el mago",
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
      await Token.destroy({
        where: {
          MagoId: req.params.id,
        },
      });
      res.send("Avada Kedavra!!!! El mago ha sido eliminado");
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message:
          "Ha habido un problema al eliminar el mago y sus pedidos",
      });
    }
  },


  getConnect(req, res) {
    Mago.findOne({ where: { id: req.mago.id } }, {
      include: [Pedido],
    })
      .then((mago) => res.send(mago))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el mago",
        });
      });
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