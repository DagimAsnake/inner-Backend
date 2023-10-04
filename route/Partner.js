const router = require("express").Router();
const PartnerController = require("../controller/Partner")

router.post("/post", PartnerController.CreatePartner)
router.get('/get', PartnerController.getPartners)
router.delete('/delete/:partnerId', PartnerController.deletePartner)

module.exports = router;