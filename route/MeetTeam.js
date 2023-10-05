const router = require("express").Router();
const MeetTeamController = require("../controller/MeetTeam")

router.post("/post", MeetTeamController.CreateMeetTeam)
router.get('/get', MeetTeamController.getMeetTeam)
router.put('/update/:meetTeamId', MeetTeamController.updateMeetTeam)

module.exports = router;