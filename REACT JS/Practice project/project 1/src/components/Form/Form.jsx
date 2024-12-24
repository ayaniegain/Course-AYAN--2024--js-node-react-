import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState({
    fname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue);
    setInputValue({
      fname: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Form</p>
      <input
        type="text"
        placeholder="name input"
        value={inputValue.fname}
        onChange={handleChange}
        name="fname"
      />
      <input
        type="email"
        placeholder="email input"
        value={inputValue.email}
        onChange={handleChange}
        name="email"
      />
      <input
        type="password"
        placeholder="password input"
        value={inputValue.password}
        onChange={handleChange}
        name="password"
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default Form;
