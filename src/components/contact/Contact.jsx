import React from "react";
import styles from "./Contact.module.css";
function Contact(){
    return(
        <div id={styles.contacts}>
            <h5 className={styles.contact}>Have a project in mind? Feel free to reach out!</h5>
            <h3 className={styles.email}><strong>Contact me:</strong> abdulazeezhauwa1997@gmail.com</h3>
        </div>
    )
};
export default Contact