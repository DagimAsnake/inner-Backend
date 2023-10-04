const router = require("express").Router();
const HomeController = require("../controller/Home")

router.post("/post", HomeController.CreateHome)
router.get('/get', HomeController.getHome)
router.put('/update/:homeId', HomeController.updateHome)

module.exports = router;