import React from "react";
import Entry from "./Entry";
import entries from "./entries";
import styles from "./ArticlePart2.module.css";

function createEntry(entry) {
    return (
      <Entry
        key={entry.id}
        name={entry.title}
        articleBody={entry.body}
        URL={entry.docURL}
      />
    );
}
function ArticlePart2() {
    return (
      <div>
        
          <h1 className={styles.overallTitle}>Article -- Part 2</h1>
        
        <ul>{entries.map(createEntry)}</ul>
      </div>
    );
  }
  
  export default ArticlePart2;
