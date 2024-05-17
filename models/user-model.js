const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        typeof: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        typeof: Array,
        default: []
    },
    contact: Number,
    picture: String
});

module.exports = mongoose.model("user", userSchema);