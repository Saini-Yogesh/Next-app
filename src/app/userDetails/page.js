"use client";
import Script from "next/script";
import SrciptFile from "../location.js";

const UserDetails = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => console.log("Script loaded successfully")}
        onError={() => console.log("Script failed to load")}
      />
      <h1>Hi UserDetails</h1>
    </div>
  );
};

export default UserDetails;
