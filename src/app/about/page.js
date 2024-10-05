"use client";
import Link from "next/link";
import react from "react";
import { useRouter } from "next/navigation";

const about = () => {
  const router = useRouter();
  return (
    <div>
      <h1> about me</h1>
      <Link href="/">go to home</Link>
      <br />
      <br />
      <button  onClick={() => {
    console.log("Navigating to home");
    router.push("/");
  }}> go to home </button>
    </div>
  );
};

export default about;
