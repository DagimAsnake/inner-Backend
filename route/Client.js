const router = require("express").Router();
const ClientController = require("../controller/Client")

router.post("/post", ClientController.CreateClient)
router.get('/get', ClientController.getClients)
router.get('/get/:clientId', ClientController.getClient)
router.put('/update/:clientId', ClientController.updateClient)
router.delete('/delete/:clientId', ClientController.deleteClient)

module.exports = router;