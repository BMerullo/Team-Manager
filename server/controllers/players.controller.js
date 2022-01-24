const Players = require("../models/players.model")


module.exports = {

    findAllPlayers: (req, res) => {
        Players.find({})
            .then((allPlayers) => {
                console.log(allPlayers);
                res.json(allPlayers)
            })
            .catch((err) => {
                console.log("findAllPlayers failed")
                res.json({ message: "Something went wrong with findAllPlayers", error: err })
            })
    },

    findOnePlayer: (req, res) => {
        Players.findOne({ _id: req.params.id })
            .then((onePlayer) => {
                console.log(onePlayer);
                res.json(onePlayer);
            })
            .catch((err) => {
                console.log("findOnePlayer failed")
                res.json({ message: "Something went wrong in findOnePlayer", error: err });
            })

    },

    createNewPlayer: (req, res) => {
        Players.create(req.body)
            .then((newPlayer) => {
                console.log(newPlayer);
                res.json(newPlayer)
            })
            .catch((err) => {
                console.log("Something went wrong with createNewPlayer")
                res.statue(400).json(err)
            })
    },

    updatePlayer: (req, res) => {
        Players.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedPlayer) => {
                console.log(updatedPlayer);
                res.json(updatedSetup);
            })
            .catch((err) => {
                res.status(400).json(err);
                res.json({ message: "Something went wrong with updatePlayer", error: err });
            })
    },

    deletePlayer: (req, res) => {
        Players.deleteOne({ _id: req.params.id })
            .then((deletedPlayer) => {
                console.log(deletedPlayer)
                res.json(deletedPlayer)
            })
            .catch((err) => {
                console.log("deletedPlayer failed")
                res.json({ message: "Something went wrong with deleteSetup", error: err });
            })
    },
}