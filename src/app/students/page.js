import React from "react";

const Student = () => {
  return (
    <div>
      {/* <title>hi students</title>{" "} */}
      {/* if you write the tittle here then it will create two title that will impact the SEO */}
      <h1>Hi student</h1>
    </div>
  );
};

export default Student;

export function generateMetadata() {
  return {
    title: "students page",
    description: "user page description",
  };
}
