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