import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Redux/userSlice";

function User() {
  let dispatch = useDispatch();
  let { user, status, error } = useSelector((state) => state.allusers);

  return (
    <div>
      <button
        className="border-2 border-amber-800 p-2 ml-[50%]"
        onClick={() => dispatch(fetchUsers())}
      >
        click to get User✅
      </button>
      <div className="user">
        {!user && user.length <= 0 ? (
          <h2>Loading..</h2>
        ) : (
          <div>
            {user.map((u) => (
              <h2 key={u.id}>{u.name}</h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
