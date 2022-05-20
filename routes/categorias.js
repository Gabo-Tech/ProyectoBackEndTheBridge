const express = require("express");
const CategoriaController = require("../controllers/CategoriaController");
const router = express.Router();

router.post("/newcategory", CategoriaController.create);
router.get("/get/category", CategoriaController.getAll);
router.get("/categoryid/:id", CategoriaController.getById);
router.get("/searchcategory/:title", CategoriaController.getByName);
router.delete("/deletecategory/:id", CategoriaController.delete);

module.exports = router;