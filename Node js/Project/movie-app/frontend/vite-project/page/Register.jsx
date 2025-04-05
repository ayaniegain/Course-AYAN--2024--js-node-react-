import React, { useState } from "react";

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

    if (password!==confirmpassword) {
      alert("password and confirm password should be same")
      return
      
    }
    
    let user = { name, username, email, password };

    fetch("/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  function handleChanges(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Register
      </h2>

      <input
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Full Name"
        className="w-full p-3 mb-4 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      <br />
      <input
        type="text"
        name="username"
        onChange={handleChanges}
        placeholder="Username"
        className="w-full p-3 mb-4 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      <br />
      <input
        type="email"
        name="email"
        onChange={handleChanges}
        placeholder="Email Address"
        className="w-full p-3 mb-4 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChanges}
        placeholder="Password"
        className="w-full p-3 mb-4 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      <br />
      <input
        type="password"
        name="confirmpassword"
        onChange={handleChanges}
        placeholder="Confirm Password"
        className="w-full p-3 mb-6 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      <br />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white text-lg py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

export default Register;
