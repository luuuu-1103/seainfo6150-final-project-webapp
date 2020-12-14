import React, { useState } from "react";
import styles from "./CreateArea.module.css";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className={styles.cform}>
        <input className={styles.cinput}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea className={styles.ctextarea}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className={styles.cbutton} onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;