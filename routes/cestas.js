const express = require("express");
const CestaController = require("../controllers/CestaController");
const router = express.Router();

router.post("/", CestaController.create);
router.get("/", CestaController.getAll);
router.get("/id/:id", CestaController.getById);
router.get("/search/:title", CestaController.getByName);
router.delete("/delete/:id", CestaController.delete);

module.exports = router;