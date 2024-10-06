"use client";
import Link from "next/link";
import React from "react";

const Student = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1> list of student</h1>
      <h4>Name : {params.student}</h4>
    </div>
  );
};

export default Student;
