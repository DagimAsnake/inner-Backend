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
  
    // app.use(express.urlencoded({ extended: true }));
    app.use(express.json({limit: "30mb",extended:true}));
    app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    });
  
    app.use(cors());
  
    const HomeRouter = require('./route/Home')
    const AboutRouter = require('./route/About')
    const ContactRouter = require('./route/Contact')
    const PartnerRouter = require('./route/Partner')
    const ClientRouter = require('./route/Client')
    const ServiceRouter = require('./route/Service')
    const MeetTeamRouter = require('./route/MeetTeam')
    const TeamRouter = require('./route/Team')

    app.use('/home', HomeRouter)
    app.use('/about', AboutRouter)
    app.use('/contact', ContactRouter)
    app.use('/partner', PartnerRouter)
    app.use('/client', ClientRouter)
    app.use('/service', ServiceRouter)
    app.use('/meetTeam', MeetTeamRouter)
    app.use('/team', TeamRouter)


  