import React from "react";
import getUsers from "../../../../services/getUsers";

const page = async ({ params }) => {
  let users = await getUsers();
  const userId = params.userId;
  const user = users[userId - 1];
  return (
    <div>
      <h3> use detail page</h3>
      <h3>Id : {user.id}</h3>
      <h3>Naame : {user.name}</h3>
      <h3>Phone : {user.phone}</h3>
      <h3>website : {user.website}</h3>
    </div>
  );
};

export default page;
// till now this is not the part of SSG

export async function generateStaticParams() {
  let users = await getUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
// this the part of static site genration
