"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  /*---------------- till lecture 17 --------*/
  const router = useRouter();
  const navigate = (routeName) => {
    router.push(routeName);
  };
  return (
    <div>
      {/*---------------- till lecture 17 --------*/}
      {/* <h1> Home</h1>
      <button onClick={() => navigate("/login")}>
        go to login page using navigation
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>
        go to about page using navigation
      </button> */}

      <Link href="/productList" className={styles.LinkHeading}>
        <h1 className={styles.heading}>Product List</h1>
      </Link>
    </div>
  );
}
