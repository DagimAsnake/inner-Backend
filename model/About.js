const mongoose = require("mongoose");
const { Schema, model } = mongoose

const AboutSchema = new Schema({
    about: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const About = model("About", AboutSchema);
module.exports = About