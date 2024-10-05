"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("anil");
  const changeName = () => {
    if (name === "anil") setName("yogesh");
    else setName("anil");
  };
  const InnerComp = () => {
    return <h1>"YOGESH SAINI"</h1>;
  };
  return (
    <div>
      <h1> Hello world! {name}</h1>
      <Name name="yogesh" />
      <Name name="saini" />
      <Name name="yogesh_1__" />
      <InnerComp />
      {InnerComp()}
      <button onClick={changeName}>click me</button>
    </div>
  );
}

const Name = (props) => {
  return (
    <div>
      <h1> my name is {props.name}</h1>
    </div>
  );
};
