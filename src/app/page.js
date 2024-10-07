"use client";
import { API_BASE_URL } from "@/config/conatant";
import styles from "./page.module.css";

export default function Home() {
  console.log(process.env.NODE_ENV);
  return (
    <div>
      <h1 className={`${styles.green} ${styles.center}`}>
        Static site genration in Next js
      </h1>
      {process.env.NODE_ENV !== "development" ? (
        <h1> producation mode</h1>
      ) : (
        <h1> development mode</h1>
      )}
      {<h1> {API_BASE_URL} </h1>}
    </div>
  );
}
