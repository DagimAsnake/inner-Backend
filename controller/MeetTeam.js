const MeetTeam = require("../model/MeetTeam")

module.exports.CreateMeetTeam = async function (req, res) {
    const data = req.body;
    if (!(data.meet)) {
        return res.json({
            msg: "Inputs are required",
        });
    }

    const inputData = {
        meet: data.meet
    }

    const newMeetTeam = new MeetTeam(inputData);

    await newMeetTeam.save();
    return res.json({
        msg: "Meet Team sent successfully"
    }).status(200)
}

module.exports.getMeetTeam = async function (req, res) {
    try {
        const meetTeam = await MeetTeam.findOne({});
    
        if (!meetTeam) {
          return res.status(404).json({
            error: 'No meet team found',
          });
        }
    
        const data = {
          _id: meetTeam._id,
          meet: meetTeam.meet,
        };
    
        return res.status(200).json(data);
      } catch (error) {
        console.error('Error retrieving meet team:', error);
        return res.status(500).json({
          error: 'Server error',
        });
      }
}

module.exports.updateMeetTeam = async function (req, res) {
    const { meetTeamId } = req.params;
    const data = req.body;

    const updatedData = {
        meet: data.meet
    }
  
    try {
      const meetTeam = await MeetTeam.findById(meetTeamId);
  
      if (!meetTeam) {
        return res.status(404).json({ msg: 'Meet team not found' });
      }
  
      await MeetTeam.findByIdAndUpdate(meetTeamId, updatedData);
      return res.status(200).json({ msg: 'Meet Team updated successfully' });
    } catch (error) {
      console.error('Error updating about:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };