const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({

    name: {
        type: String,
        rquired: [true, "Please add a name"],
        minlength: [2, "Name must be at least 2 characters"]
    },

    position: {
        type: String,
        enum: [
            "Forward",
            "Striker",
            "Defender",
            "Goal Keeper"
        ]
    }


}, {timestamps: true});

const Players = mongoose.model("Players", PlayerSchema);
module.exports = Players;