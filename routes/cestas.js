const express = require("express");
const CestaController = require("../controllers/CestaController");
const router = express.Router();

router.post("/newcesta", CestaController.create);
router.get("/get/cesta", CestaController.getAll);
router.get("/cestaid/:id", CestaController.getById);
router.get("/searchcesta/:title", CestaController.getByName);
router.delete("/deletecesta/:id", CestaController.delete);

module.exports = router;