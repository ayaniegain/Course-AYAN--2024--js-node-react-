import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  let [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let { email, password, confirmpassword } = userData;

    if (password !== confirmpassword) {
      alert("password and confirm password should be same");
      return;
    }

    let user = { email, password };

    try {
      let response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      let data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate("/");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("something went wrong!!");
    }
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
        Login
      </h2>

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
      <p className="text-red-500 text-sm">{error}</p>
    </form>
  );
}

export default Login;
