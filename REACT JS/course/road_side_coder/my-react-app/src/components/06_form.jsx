import React, { useContext, useState } from "react";
import { credContext } from "../context/useContextProvider";

function Example() {
  let initial = {
    name: "",
    phone: "",
    email: "",
  };
  const [user, setUser] = useState(initial);
  const [submittedData, setSubmittedData] = useState(null);

  const { login, setLogin } = useContext(credContext);

  console.log(login);
  let myCred = {
    name: "ayan Biswas",
    phone: "9066357988",
    email: "ayan.orange.com@gmail.com",
  };

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData(user);
    setUser(initial);
    console.log(user);
    if (user) {
      if (
        user.name.toLocaleLowerCase() === myCred.name.toLocaleLowerCase() &&
        user.phone === myCred.phone &&
        user.email.toLocaleLowerCase() === myCred.email.toLocaleLowerCase()
      ) {
        console.log(true);
        setLogin(true);
      }
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-96 bg-white shadow-md rounded-lg p-6">
        {!login ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        ) : (
          <>
            <img
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="pic"
            />
          </>
        )}
        <div>
          {!login && submittedData ? (
            <div className="mt-6 bg-gray-100 p-4 rounded-md">
              <h2 className="text-red-400">Credential does't match </h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Example;
