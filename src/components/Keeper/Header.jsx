import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.hheader}>
      <h1 className={styles.hh1}>Keeper</h1>
      <h3 className={styles.hh3}>This is where you can keep track of your learning progress</h3>
    </header>
  );
}

export default Header;