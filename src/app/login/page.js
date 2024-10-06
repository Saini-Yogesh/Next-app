"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (routeName) => {
    router.push("/login/" + routeName);
  };
  return (
    <div>
      <h1> login</h1>
      <button onClick={() => navigate("studentLogin")}> student login</button>
      <br />
      <br />
      <button onClick={() => navigate("teacherLogin")}> teacher login </button>
      <br />
      <br />
      <button onClick={() => router.push("/")}> back </button>
    </div>
  );
};

export default Login;
