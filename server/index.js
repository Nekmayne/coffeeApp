const express = require("express");
const app = express();
const cors = require("cors");
const coffeeController = require("./controllers/coffees");

app.use(cors());

app.use(express.json());

app.use("/api/coffees", coffeeController);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
