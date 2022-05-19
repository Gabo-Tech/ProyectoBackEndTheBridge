const express = require("express");
const ProductoController = require("../controllers/ProductoController");
const router = express.Router();

router.post("/", ProductoController.create);
router.get("/", ProductoController.getAll);
router.get("/id/:id", ProductoController.getById);
router.get("/search/:title", ProductoController.getByName);
router.delete("/delete/:id", ProductoController.delete);

module.exports = router;