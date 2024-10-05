"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h1> login to me</h1>
      <Link href="/">go to home</Link>
      <br />
      <br />
      <button onClick={() => router.push("/")}> go to home </button>
    </div>
  );
};

export default Login;
