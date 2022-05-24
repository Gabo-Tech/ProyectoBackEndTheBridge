const express = require("express");
const ProductoController = require("../controllers/ProductoController");
const router = express.Router();
const {authentication} = require('../middleware/authentication');

router.post("/newproducto", authentication, ProductoController.create);
router.get("/get/producto", ProductoController.getAll);
router.get("/get/productobyprice/:precio", ProductoController.getByPrice);
router.get("/productoid/:id", ProductoController.getById);
router.get("/searchproducto/:title", ProductoController.getByName);
router.delete("/deleteproducto/:id", ProductoController.delete);

module.exports = router;