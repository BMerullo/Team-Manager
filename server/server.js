require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    }),
);

require("./config/mongoose.config.js");
require("./routes/players.routes")(app);


app.listen (8000, ()=> console.log("you are conntected at port 8000"));