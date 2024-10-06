"use client";
import React from "react";
import { useRouter } from "next/navigation";

const aboutCollage = () => {
  const router = useRouter();
  return (
    <div>
      <h1> about aboutCollage</h1>
      <button onClick={() => router.push("/about")}> back</button>
    </div>
  );
};

export default aboutCollage;
