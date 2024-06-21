import axios from "../../api";
import React, { useEffect, useState } from "react";
import "./User.css";
const User = () => {
  const [users, setUsers] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user-data"));
  useEffect(() => {
    axios.get("/users/search", { params: { limit: 1000 }} )
    .then((res) => setUsers(res.data.data.users));
  }, []);
  console.log(users);
  return (
    <div className="user">
      <div className="container">
        <h2>
          {userData?.FirstName} {userData?.role}
        </h2>
        {users?.map((user) => (
          <div key={user.id} className="users__div">
            <h3>{user?.FirstName} {user?.LastName}</h3>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
