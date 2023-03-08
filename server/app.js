const express = require("express");
const app = express();
const cors = require("cors");
const coffeeController = require("./controllers/coffees");

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

app.use(express.json());

app.use("/api/coffees", coffeeController);

module.exports = app;
