const router = require("express").Router();
const ContactController = require("../controller/Contact")

router.post("/post", ContactController.CreateContact)
router.get('/get', ContactController.getContact)
router.put('/update/:contactId', ContactController.updateContact)

module.exports = router;