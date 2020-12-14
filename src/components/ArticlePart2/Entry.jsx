import React from "react";
import styles from "./Entry.module.css";

function Entry(props) {
  return (
    // <div>
      
    //     <span >
    //       {props.emoji}
    //     </span>
    //     <span>{props.name}</span>
      
    //   <dd>{props.description}</dd>
    // </div>
    <article>
        <div>
            <ul>
               <h2 className={styles.articleHeading}>{props.name}</h2>
           
               <p className={styles.articleBody}>{props.articleBody}</p>
               <a className={styles.articleURL} href={props.URL}>learn more</a>
              
              
            </ul>
            
        </div>
    </article>
  );
}

export default Entry;