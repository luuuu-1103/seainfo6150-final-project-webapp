import React from 'react';
import styles from "./Contact.module.css";


function Contact() {
    return (
        <div className={styles.cpage}>
            <h3>If you have any problems regarding the technical issues or errors found in the articles,<br></br> you
            are more than welcomed to contact us using the email below.<br></br>
            <br></br>
            <br></br>
              <a className={styles.email}href="full-stack-learning@gmail.com">full-stack-learning@gmail.com</a>.
            </h3>
        </div>
    )
}

export default Contact;