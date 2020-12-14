import React from "react";
import styles from "./Note.module.css";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.note}>
      <h1 className={styles.noteh1}>{props.title}</h1>
      <p className={styles.notep}>{props.content}</p>
      <button className={styles.button} onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;