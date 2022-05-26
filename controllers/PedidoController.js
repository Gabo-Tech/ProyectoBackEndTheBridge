const { Pedido, Product, Mago, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const PedidoController = {
  create(req, res) {
    if(req.body.ProductId=='5'){
      setTimeout(function(){
        res.status(418).send({ message: "Dobby no puede ser comprado, Dobby es un elfo libre"});
    }, 5000);
    }else{
      Pedido.create({ ...req.body })
        .then((pedido) =>
          res.status(201).send({ message: "Pedido mágico creado con éxito", pedido })
        )
        .catch(console.error);

    }
  },


insert(req,res){
  Pedido.create({...req.body})
  .then(pedido=>{
  pedido.addProduct(req.body.ProductId)
  res.send(pedido)
})
  .catch(err => console.error(err))
},


  getAll(req, res) {
    Pedido.findAll({
      include: [Mago.name],include: [{ model: Product, through: { attributes: [] } }],
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

  async update(req, res) {
    try {
    await Pedido.update(
    { ...req.body },
    {
    where: {
    id: req.params.id,
    },
    }
    );
    const pedido = await Pedido.findByPk(req.params.id)
    pedido.setProducts(req.body.ProductId);
    res.send("Libro actualizado con éxito");
    } catch (error) {
    console.error(error);
    res
    .status(500)
    .send({ message: "no ha sido posible actualizado el producto" });
    }
    },

  async delete(req, res) {
    await Pedido.destroy({
      where: {
        id: req.params.id,
      },
    });
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("El pedido ha sido eliminado con éxito");
  },
};



module.exports = PedidoController;