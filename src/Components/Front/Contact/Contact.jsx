import React from "react";
import styles from "./contact.module.css";
function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contact</h1>
        </div>
        <div className={styles.content}>
          <h3>
            Email :
            <span>
              <a href="mailto:imranshakils69@2gmail.com"> coffe@gmail.com</a>
            </span>
          </h3>
          <h3>
            Contact :<span>91xxxxxx00</span>
          </h3>
          <h3>
            Location :<span>xyz colony , chennnai.</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Contact;
