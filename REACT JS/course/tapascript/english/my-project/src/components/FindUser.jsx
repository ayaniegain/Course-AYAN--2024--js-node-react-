import React, { useState } from "react";
import GithubUser from "./GithubUser";

function FindUser() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="find-user-container flex items-center justify-center min-h-screen text-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-xl font-bold mb-4">Search for user</div>
        <input
          type="text"
          className="border p-2 mb-4 w-full"
          placeholder="Enter username"
          value={user}
          onChange={handleChange}
        />
        {!user ? (
          <p className="text-gray-500 mb-4">Initiate the search</p>
        ) : (
          <GithubUser user={user} />
        )}
      </div>
    </div>
  );
}

export default FindUser;
