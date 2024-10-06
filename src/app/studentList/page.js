import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div>
      <h1> list of student</h1>
      <ul>
        <li>
          <Link href="/studentList/1">yogesh</Link>{" "}
        </li>
        <li>
          <Link href="/studentList/2"> dixit</Link>{" "}
        </li>
        <li>
          <Link href="/studentList/3"> rakesh</Link>{" "}
        </li>
        <li>
          <Link href="/studentList/4"> shanker</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
