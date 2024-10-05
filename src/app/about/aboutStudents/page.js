"use client"
import React from "react";
import { useRouter } from "next/navigation";

const aboutStudents = () => {
  const router = useRouter();
  return (
    <div>
      <h1> about Students</h1>
      <button onClick={() => router.push("/about")}> back</button>
    </div>
  );
};

export default aboutStudents;
