"use client";
import styles1 from "./page.module.css";
import styles2 from "./inside.module.css";
import styles3 from "@/outside.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/productList">
        <h1 className={styles1.main}>Fetch API data in server component 1</h1>
        <h1 className={styles2.main}>Fetch API data in server component 2</h1>
        <h1 className={styles3.main}>Fetch API data in server component 3</h1>
      </Link>
    </div>
  );
}
