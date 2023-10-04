const mongoose = require("mongoose");
const { Schema, model } = mongoose

const PartnerSchema = new Schema({
    image: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Partner = model("Partner", PartnerSchema);
module.exports = Partner