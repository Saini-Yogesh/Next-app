"use client";
import Link from "next/link";
import react from "react";
import { useRouter } from "next/navigation";

const about = () => {
  const router = useRouter();
  const navigate = (routeName) => {
    router.push("/about/" + routeName);
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate("aboutCollage")}>about Collage</button>
      <br />
      <br />
      <button onClick={() => navigate("aboutStudents")}>about Students</button>
      <br />
      <br />
      <button onClick={() => router.push("/")}>back</button>
    </div>
  );
};

export default about;
