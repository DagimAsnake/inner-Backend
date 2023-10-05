const router = require("express").Router();
const ServiceController = require("../controller/Service")

router.post("/post", ServiceController.CreateService)
router.get('/get', ServiceController.getServices)
router.get('/get/:serviceId', ServiceController.getService)
router.put('/update/:serviceId', ServiceController.updateService)
router.delete('/delete/:serviceId', ServiceController.deleteService)

module.exports = router;