const playersController = require("../controllers/players.controller")


module.exports = (apps)=> {

    apps.get("/api/players", playersController.findAllPlayers);
    apps.post("/api/players", playersController.createNewPlayer);
    apps.get("/api/players/:id", playersController.findOnePlayer);
    apps.put("/api/players/:id", playersController.updatePlayer);
    apps.delete("/api/players/:id", playersController.deletePlayer);
}