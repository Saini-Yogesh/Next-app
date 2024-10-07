"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [currentColor, SetCurrentColor] = useState(styles.red);
  const changeColor = () => {
    if (currentColor == styles.red) SetCurrentColor(styles.green);
    else SetCurrentColor(styles.red);
  };
  const { blue, yellow, pink } = styles; // extrace from style
  return (
    <div>
      <Link href="/productList">
        <h1 className={currentColor}>Fetch API data in server component 1</h1>
      </Link>
      <button onClick={() => changeColor()}> change color</button>
      <h1 className={blue}>heading 1</h1>
      <h1 className={yellow}>heading 2</h1>
      <h1 className={pink}>heading 3</h1>
      {currentColor === styles.red ? (
        <h1> if condition</h1>
      ) : (
        <h1> else condition</h1>
      )}
    </div>
  );
}
