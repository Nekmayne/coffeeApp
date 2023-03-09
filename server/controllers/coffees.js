const fs = require("fs");
const coffeeController = require("express").Router();

coffeeController.post("/", (req, res) => {
  const { name, weight, price, roast } = req.body;
  const newCoffee = { name, weight, price, roast };

  let coffees = [];
  try {
    coffees = JSON.parse(
      fs.readFileSync("coffees.json", { encoding: "utf-8" })
    );
  } catch (err) {
    console.error(err);
  }
  coffees.push(newCoffee);
  fs.writeFileSync("coffees.json", JSON.stringify(coffees), {
    encoding: "utf-8",
  });

  res.send({ message: "Coffee saved successfully" });
});

coffeeController.get("/", (req, res) => {
  let coffees = [];
  try {
    coffees = JSON.parse(
      fs.readFileSync("coffees.json", { encoding: "utf-8" })
    );
  } catch (err) {
    console.error(err);
  }

  const search = req.query.search;
  if (search) {
    coffees = coffees.filter((coffee) => {
      return Object.values(coffee).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      );
    });
  }
  res.send(coffees);
});

module.exports = coffeeController;
