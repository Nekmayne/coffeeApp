import React, { useEffect, useState } from "react";
import "./App.css";

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

  return (
    <div className="coffees">
      <h1>Add a coffee</h1>
      <h1>Favorite Coffees</h1>
      <div className="coffee-list">
        <h1>List:</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Roast</th>
            </tr>
          </thead>
          <tbody>
            {coffeeData.map((coffee, coffeeIndex) => {
              return (
                <tr key={coffeeIndex}>
                  <td>{coffee.name}</td>
                  <td>{coffee.weight}</td>
                  <td>{coffee.price}</td>
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
