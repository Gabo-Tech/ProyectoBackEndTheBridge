const express = require("express");
const CategoriaController = require("../controllers/CategoriaController");
const router = express.Router();

router.post("/newcategory", CategoriaController.create);
router.get("/get/category", CategoriaController.getAll);
router.delete("/deletecategory/:id", CategoriaController.delete);
router.put("/put/category/:id", CategoriaController.update);
router.get("/get/category/:id", CategoriaController.getById);
router.get("/searchcategory/:title", CategoriaController.getByName);

module.exports = router;