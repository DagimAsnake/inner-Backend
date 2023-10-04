const Home = require("../model/Home")

module.exports.CreateHome = async function (req, res) {
      const data = req.body;
      if (!(data.title && data.quote && data.image)) {
          return res.json({
              msg: "Inputs are required",
          });
      }

      const inputData = {
          title: data.title,
          quote: data.quote,
          image: data.image
      }
  
      const newHome = new Home(inputData);
  
      await newHome.save();
      return res.json({
          msg: "Home sent successfully"
      }).status(200)
  }

  module.exports.getHome = async function (req, res) {
    try {
      const home = await Home.findOne({});
  
      if (!home) {
        return res.status(404).json({
          error: 'No home found',
        });
      }
  
      const data = {
        _id: home._id,
        title: home.title,
        quote: home.quote,
        image: home.image,
      };
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving home:', error);
      return res.status(500).json({
        error: 'Server error',
      });
    }
  };


  module.exports.updateHome = async function (req, res) {
    const { homeId } = req.params;
    const data = req.body;

    const updatedData = {
        title: data.title,
        quote: data.quote,
        image: data.image
    }
  
    try {
      const home = await Home.findById(homeId);
  
      if (!home) {
        return res.status(404).json({ msg: 'Home not found' });
      }
  
      await Home.findByIdAndUpdate(homeId, updatedData);
      return res.status(200).json({ msg: 'Home updated successfully' });
    } catch (error) {
      console.error('Error updating home:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };