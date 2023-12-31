const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    recipes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ]
})

module.exports = mongoose.model("User", userSchema)