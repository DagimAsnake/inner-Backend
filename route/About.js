const router = require("express").Router();
const AboutController = require("../controller/About")

router.post("/post", AboutController.CreateAbout)
router.get('/get', AboutController.getAbout)
router.put('/update/:aboutId', AboutController.updateAbout)

module.exports = router;