"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.red}>
        generateMetadata for Dynamic meta data in next.js
      </h1>
    </div>
  );
}
/*
-> meta data and dynamic meta data? 
    Ans. titte and descripicationa are dynamic meta data 
         if we change the meta data according to the page then we can say meta data is dynmic 
         and we are not changinh with the page are constant with all apge then meta data is static
*/
