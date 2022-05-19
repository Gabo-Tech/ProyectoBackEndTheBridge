const express = require("express");
const PedidoController = require("../controllers/PedidoController");
const router = express.Router();

router.post("/", PedidoController.create);
router.get("/", PedidoController.getAll);
router.get("/id/:id", PedidoController.getById);
router.get("/search/:title", PedidoController.getByName);
router.delete("/delete/:id", PedidoController.delete);

module.exports = router;