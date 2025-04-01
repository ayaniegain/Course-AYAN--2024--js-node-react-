import React, { use, useState } from "react";

function Register() {
  let [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    let { name, username, email, password, confirmpassword } = userData;
    let user = { name, username, email, password, confirmpassword };

    // async function postuserData() {

    fetch("/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // }

    // postuserData()
  }

  function handleChanges(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Register</h2>
      <input
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        name="username"
        onChange={handleChanges}
        placeholder="userName"
      />
      <br />
      <input
        type="email"
        name="email"
        onChange={handleChanges}
        placeholder="email"
      />
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChanges}
        placeholder="password"
      />
      <br />
      <input
        type="password"
        name="confirmpassword"
        onChange={handleChanges}
        placeholder="Cpassword"
      />
      <br />

      <button type="submit">submit </button>
    </form>
  );
}

export default Register;
