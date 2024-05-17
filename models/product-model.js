const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    discount: {
        typeof: Number,
        default: 0
    },
    bgColor: String,
    panelColor: String,
    textColor: String
});

module.exports = mongoose.model("product", productSchema);