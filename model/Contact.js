const mongoose = require("mongoose");
const { Schema, model } = mongoose

const ContactSchema = new Schema({
    addressOne: {
        type: String,
        required: true
    },
    addressTwo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Contact = model("Contact", ContactSchema);
module.exports = Contact