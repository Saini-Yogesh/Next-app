import React from "react";

const User = () => {
  return (
    <div>
      <h1>Hi User</h1>
    </div>
  );
};

export default User;

export function generateMetadata() {
  return {
    title: "user page",
    description: "user page description",
  };
}
