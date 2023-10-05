const mongoose = require("mongoose");
const { Schema, model } = mongoose

const ClientSchema = new Schema({
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
    },
    message: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Client = model("Client", ClientSchema);
module.exports = Client