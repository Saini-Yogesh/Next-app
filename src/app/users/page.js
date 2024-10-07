import React from "react";

const Users = async () => {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  console.log(data.users);
  return (
    <div>
      <h1> Persons List</h1>
      {data.users.map((item) => (
        <h3 key={item.id}>
          Name: {item.firstName} {item.lastName}
        </h3>
      ))}
    </div>
  );
};

export default Users;
