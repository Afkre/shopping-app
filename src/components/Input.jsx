import React, { useState, useContext } from "react";

export default function Input({ handleCategory }) {
  const [category, setCategory] = useState("Choose...");

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleCategory(e, category);
        }}
        className="search"
      >
        <div className="input-group w-50">
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}