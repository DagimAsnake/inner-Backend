const router = require("express").Router();
const HomeController = require("../controller/Home")

router.post("/post", HomeController.CreateHome)

module.exports = router;