if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
  }
  
  const { app, express } = require("./server");
  const mongoose = require("mongoose");
  const cors = require('cors')
  
  mongoose.set("strictQuery", true);
  
  const dbUrl = "mongodb://127.0.0.1/innerpeace"
//   const dbUrl = process.env.DB_URL
  
  mongoose
    .connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database conneceted successfully");
    })
    .catch((err) => {
      console.log("Error while connecting to database");
      console.log(err);
    });
  
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    });
  
    app.use(cors());
  