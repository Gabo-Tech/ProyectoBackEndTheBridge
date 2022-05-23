const express = require("express");
const PedidoController = require("../controllers/PedidoController");
const router = express.Router();

router.post("/newpedido", PedidoController.create);
router.get("/get/pedidos", PedidoController.getAll);
router.get("/pedidoid/:id", PedidoController.getById);
// router.get("/searchpedido/:title", PedidoController.getByName);
router.delete("/deletepedido/:id", PedidoController.delete);

module.exports = router;