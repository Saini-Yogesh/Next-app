"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (routeName) => {
    router.push(routeName);
  };
  return (
    <div>
      <h1> Hello world!</h1>
      <Link href="./about"> go to about page using linking</Link> <br />
      <Link href="./login"> go to login page using linking</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>
        go to login page using navigation
      </button>
      <br />
      <button onClick={() => navigate("/about")}>
        go to about page using navigation
      </button>
    </div>
  );
}
