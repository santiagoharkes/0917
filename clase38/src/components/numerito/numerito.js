import React from "react";

import styles from "./Numerito.module.css";

function Numerito({ numeroPiola }) {
  console.log(styles);
  return (
    <div className={styles.numerito}>
      <h1 className={styles.numeritoPepirruno}>{numeroPiola}</h1>
    </div>
  );
}

export default Numerito;
