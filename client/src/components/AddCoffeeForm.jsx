import React, { useState } from "react";
import "./AddCoffeeForm.css";
import Notification from "./Notification";

function AddCoffeeForm({ addCoffee }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [roast, setRoast] = useState("light");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleRoastChange = (event) => {
    setRoast(event.target.value);
  };

  const clearForm = () => {
    setName("");
    setPrice("");
    setWeight("");
    setRoast("");
  };

  const addCoffeeData = () => {
    const addData = {
      name,
      weight,
      price,
      roast,
    };
    fetch("http://localhost:3001/api/coffees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then(() => {
        addCoffee();
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !weight || !price || !roast) {
      setMessage("Fill all the fields");
      setStatus("error");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      return;
    }
    addCoffeeData();
    setStatus("success");
    setMessage("Coffee added successfully!");
    setTimeout(() => {
      setMessage(null);
    }, 3000);
    clearForm();
  };

  const roastLevels = [
    "Light",
    "Medium-Light",
    "Medium",
    "Medium-Dark",
    "Dark",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="coffee-form">
        <label>Coffee name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Package weight (g):</label>
        <input type="text" value={weight} onChange={handleWeightChange} />
        <label>Price (€):</label>
        <input type="text" value={price} onChange={handlePriceChange} />
        <label>Roast level:</label>
        <div className="roast-levels">
          {roastLevels.map((level) => (
            <label data-testid={`roast-item`} key={level}>
              <input
                type="radio"
                value={level}
                checked={roast === level}
                onChange={handleRoastChange}
              />
              {level}
            </label>
          ))}
        </div>
      </div>
      <button type="submit">Add Coffee</button>
      <Notification message={message} status={status} />
    </form>
  );
}

export default AddCoffeeForm;
