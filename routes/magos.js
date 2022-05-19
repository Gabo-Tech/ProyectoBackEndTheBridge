const express = require("express");
const MagoController = require("../controllers/MagoController");
const router = express.Router();

router.post("/", MagoController.create);
router.get("/", MagoController.getAll);
router.get("/id/:id", MagoController.getById);
router.get("/search/:title", MagoController.getByName);
router.delete("/delete/:id", MagoController.delete);

module.exports = router;

