const mongoose = require("mongoose");
const { Schema, model } = mongoose

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Team = model("Team", TeamSchema);
module.exports = Team