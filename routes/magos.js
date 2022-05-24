const express = require("express");
const MagoController = require("../controllers/MagoController");
const router = express.Router();
const {authentication} = require('../middleware/authentication');

router.post("/newmago", MagoController.create);
router.get("/get/magos", MagoController.getAll);
router.get("/magoid/:id",authentication, MagoController.getById);
router.get("/searchmago/:title",authentication, MagoController.getByName);
router.delete("/deletemago/:id",authentication, MagoController.delete);
router.put("/updatemago/:id",authentication, MagoController.update);
router.post('/login',MagoController.login);
router.delete('/logout',authentication,MagoController.logout);

module.exports = router;

