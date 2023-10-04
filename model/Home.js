const mongoose = require("mongoose");
const { Schema, model } = mongoose

const HomeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    quote: {
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

const Home = model("Home", HomeSchema);
module.exports = Home