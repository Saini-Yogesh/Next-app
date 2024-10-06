"use client";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/productList" className={styles.LinkHeading}>
        <h1 className={styles.heading}>Fetch API data in server component</h1>
      </Link>
    </div>
  );
}
