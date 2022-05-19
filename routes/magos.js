const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

router.post("/", PostController.create);
router.get("/", PostController.getAll);
router.get("/id/:id", PostController.getById);
router.get("/search/:title", PostController.getByName);
router.delete("/delete/:id", PostController.delete);

module.exports = router;

