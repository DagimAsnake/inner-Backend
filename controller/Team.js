const Team = require("../model/Team")

module.exports.CreateTeam = async function (req, res) {
      const data = req.body;
      if (!(data.name && data.image && data.position)) {
          return res.json({
              msg: "Inputs are required",
          });
      }

      const inputData = {
          name: data.name,
          image: data.image,
          position: data.position
      }
  
      const newTeam = new Team(inputData);
  
      await newTeam.save();
      return res.json({
          msg: "Team sent successfully"
      }).status(200)
  }

  module.exports.getTeams = async function (req, res) {
    try {
        const teams = await Team.find({})
        const data = teams.map((team) => ({
            _id: team._id,
            image: team.image,
            name: team.name,
            position: team.position
        }));

        return res.status(200).json({
            teams: data,
        });
    } catch (error) {
        console.error('Error retrieving teams:', error);
        return res.status(500).json({
            error: 'Server error',
        });
    }
}


module.exports.getTeam = async function (req, res) {
    const { teamId } = req.params;

    try {
      const team = await Team.findById(teamId);
  
      if (!team) {
        return res.status(404).json({
          error: 'No team found',
        });
      }
  
      const data = {
        _id: team._id,
        image: team.image,
        name: team.name,
        position: team.position
      };
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving team:', error);
      return res.status(500).json({
        error: 'Server error',
      });
    }
  };


  module.exports.updateTeam = async function (req, res) {
    const { teamId } = req.params;
    const data = req.body;

    const updatedData = {
        name: data.name,
          image: data.image,
          position: data.position
    }
  
    try {
      const team = await Team.findById(teamId);
  
      if (!team) {
        return res.status(404).json({ msg: 'team not found' });
      }
  
      await Team.findByIdAndUpdate(teamId, updatedData);
      return res.status(200).json({ msg: 'Team updated successfully' });
    } catch (error) {
      console.error('Error updating team:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

  module.exports.deleteTeam = async function (req, res) {

    const { teamId } = req.params;

    try {
        const team = await Team.findById(teamId);

        if (!team) {
            return res.status(404).json({ msg: 'Team not found' });
        }

        await Team.findByIdAndDelete(teamId);
        return res.status(200).json({ msg: 'Team deleted successfully' });
    } catch (error) {
        console.error('Error deleting team:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};