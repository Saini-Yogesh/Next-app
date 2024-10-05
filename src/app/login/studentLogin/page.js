"use client";
import React from "react";
import { useRouter } from "next/navigation";

const studentLogin = () => {
  const router = useRouter();
  return (
    <div>
      <h1> student Login</h1>
      <button onClick={() => router.push("/login")}>  back</button>
    </div>
  );
};

export default studentLogin;
