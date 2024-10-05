"use client";
import React from "react";
import { useRouter } from "next/navigation";

const teachersLogin = () => {
  const router = useRouter();
  return (
    <div>
      <h1> teacher Login</h1>
      <button onClick={() => router.push("/login")}>  back</button>
    </div>
  );
};

export default teachersLogin;
