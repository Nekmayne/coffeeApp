import React, { useEffect, useState } from "react";
import "./App.css";
import AddCoffeeForm from "./components/AddCoffeeForm";

function CoffeeForm() {
  const [coffeeData, setCoffeeData] = useState([]);

  const getCoffeeData = () => {
    fetch("http://localhost:3001/api/coffees")
      .then((data) => data.json())
      .then((data) => setCoffeeData(data));
  };

  useEffect(() => {
    getCoffeeData();
  }, []);

  const addCoffee = () => {
    getCoffeeData();
  };

  return (
    <div className="coffees">
      <h1>Add a coffee</h1>
      <AddCoffeeForm addCoffee={addCoffee} coffeeData={coffeeData} />
      <h1>Favorite Coffees</h1>

      <div className="coffee-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight (g)</th>
              <th>Price (€)</th>
              <th>Roast</th>
            </tr>
          </thead>
          <tbody>
            {coffeeData.map((coffee, idx) => {
              return (
                <tr key={idx}>
                  <td>{coffee.name}</td>
                  <td>{coffee.weight} g </td>
                  <td>{coffee.price} € </td>
                  <td>{coffee.roast}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoffeeForm;
