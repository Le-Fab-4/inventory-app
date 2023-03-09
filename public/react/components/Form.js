import React, { useState } from "react";
import apiURL from "../api";

export function Form(props) {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const res = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price,
          description,
          category,
          image,
        }),
      });
    } catch (err) {
      console.log("Oh no an error! ", err);
    }

    setDescription();
    setPrice();
    setTitle();
    setImage();
    setCategory();
  }

  return (
    // Form view
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setTitle(event.target.value)}
          placeholder="title"
        />
        <input
          onChange={(event) => setPrice(event.target.value)}
          placeholder="price"
        />
        <input
          onChange={(event) => setDescription(event.target.value)}
          placeholder="description"
        />
        <input
          onChange={(event) => setCategory(event.target.value)}
          placeholder="category"
        />
        <input
          onChange={(event) => setImage(event.target.value)}
          placeholder="image url"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => props.setForm(false)} className="back-button">
        Back to Items Store
      </button>
    </div>
  );
}
