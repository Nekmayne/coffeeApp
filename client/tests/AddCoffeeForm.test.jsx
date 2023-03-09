import React from "react";
import { render } from "@testing-library/react";
import AddCoffeeForm from "../src/components/AddCoffeeForm";
import "@testing-library/jest-dom/extend-expect";

describe("AddCoffeeForm Test", () => {
  it("should check that there is 5 different roast levels", async () => {
    const renderedApp = render(<AddCoffeeForm />);
    const roastlevels = await renderedApp.findAllByTestId(/^roast-/);
    expect(roastlevels.length).toEqual(5);
  });
  it("renders correct number of input elements", () => {
    render(<AddCoffeeForm />);
    const inputs = [...document.querySelectorAll("input[type='text']")];
    expect(inputs).toHaveLength(3);
  });
  it("renders correct number of input elements", () => {
    render(<AddCoffeeForm />);
    const inputs = [...document.querySelectorAll("input[type='radio']")];
    expect(inputs).toHaveLength(5);
  });
});
