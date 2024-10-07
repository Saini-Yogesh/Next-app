"use client";
import styles from "./page.module.css";
import Image from "next/image";
import image1 from "../download.jpg";

export default function Home() {
  console.log(image1);
  return (
    <div>
      <h1> image optmization</h1>
      <Image src={image1} width={800} height={800} />
    </div>
  );
}
