const About = require("../model/About")

module.exports.CreateAbout = async function (req, res) {
      const data = req.body;
      if (!(data.about && data.image)) {
          return res.json({
              msg: "Inputs are required",
          });
      }

      const inputData = {
          about: data.about,
          image: data.image
      }
  
      const newAbout = new About(inputData);
  
      await newAbout.save();
      return res.json({
          msg: "About sent successfully"
      }).status(200)
  }

  module.exports.getAbout = async function (req, res) {
    try {
      const about = await About.findOne({});
  
      if (!about) {
        return res.status(404).json({
          error: 'No about found',
        });
      }
  
      const data = {
        _id: about._id,
        about: about.about,
        image: about.image,
      };
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving about:', error);
      return res.status(500).json({
        error: 'Server error',
      });
    }
  };


  module.exports.updateAbout = async function (req, res) {
    const { aboutId } = req.params;
    const data = req.body;

    const updatedData = {
        about: data.about,
        image: data.image
    }
  
    try {
      const about = await About.findById(aboutId);
  
      if (!about) {
        return res.status(404).json({ msg: 'About not found' });
      }
  
      await About.findByIdAndUpdate(aboutId, updatedData);
      return res.status(200).json({ msg: 'About updated successfully' });
    } catch (error) {
      console.error('Error updating about:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };