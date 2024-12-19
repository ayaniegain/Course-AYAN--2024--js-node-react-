import React, { useEffect, useState } from "react";

function DataFetch() {
  const [allUser, setAllUser] = useState([]);

  let fetchdata = async () => {
    try {
      let user = await fetch("https://dummyjson.com/users");
      let results = await user.json();
      if (results.users) {
        setAllUser(results.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(allUser);

  useEffect(() => {
    fetchdata();
  }, []);

  if (allUser.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>List of Users</div>
      <ul>
        {allUser.map((item) => (
          <li key={item.id}>{item.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default DataFetch;
