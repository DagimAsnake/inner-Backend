const mongoose = require("mongoose");
const { Schema, model } = mongoose

const MeetSchema = new Schema({
    meet: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Meet = model("Meet", MeetSchema);
module.exports = Meet