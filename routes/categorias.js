const express = require("express");
const CategoriaController = require("../controllers/CategoriaController");
const router = express.Router();

router.post("/", CategoriaController.create);
router.get("/", CategoriaController.getAll);
router.get("/id/:id", CategoriaController.getById);
router.get("/search/:title", CategoriaController.getByName);
router.delete("/delete/:id", CategoriaController.delete);

module.exports = router;