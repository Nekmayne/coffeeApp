import React, { useEffect, useState } from "react";
import "./App.css";
import AddCoffeeForm from "./components/AddCoffeeForm";

function CoffeeForm() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [search, setSearch] = useState("");

  const getCoffeeData = () => {
    let url = "http://localhost:3001/api/coffees";
    if (search) {
      url += `?search=${search}`;
    }
    fetch(url)
      .then((data) => data.json())
      .then((data) => setCoffeeData(data));
  };

  useEffect(() => {
    getCoffeeData();
  }, [search]);

  const addCoffee = () => {
    getCoffeeData();
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="coffees">
      <h1>Add a coffee</h1>
      <AddCoffeeForm addCoffee={addCoffee} coffeeData={coffeeData} />
      <h1>Favorite Coffees</h1>

      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>

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
