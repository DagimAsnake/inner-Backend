const mongoose = require("mongoose");
const { Schema, model } = mongoose

const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Service = model("Service", ServiceSchema);
module.exports = Service