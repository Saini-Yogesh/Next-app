"use client";
export default function Lecture({ params }) {
  console.log(params);
  return (
    <div>
      <h1> lacture day : {params.lecture[0]}</h1>
      <h1> lacture No. : {params.lecture[1]}</h1>
    </div>
  );
}
