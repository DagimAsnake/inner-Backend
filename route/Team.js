const router = require("express").Router();
const TeamController = require("../controller/Team")

router.post("/post", TeamController.CreateTeam)
router.get('/get', TeamController.getTeams)
router.get('/get/:teamId', TeamController.getTeam)
router.put('/update/:teamId', TeamController.updateTeam)
router.delete('/delete/:teamId', TeamController.deleteTeam)

module.exports = router;