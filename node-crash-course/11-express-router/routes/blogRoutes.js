const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogController.index);
router.post("/", blogController.createPost);
router.get("/create", blogController.createGet);
router.get("/:id", blogController.details);
router.delete("/:id", blogController.deleteById);

module.exports = router;
