const express = require("express");
const MagoController = require("../controllers/MagoController");
const router = express.Router();

router.post("/newmago", MagoController.create);
router.get("/get/magos", MagoController.getAll);
router.get("/magoid/:id", MagoController.getById);
router.get("/searchmago/:title", MagoController.getByName);
router.delete("/deletemago/:id", MagoController.delete);

module.exports = router;

