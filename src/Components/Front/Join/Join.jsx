import React from "react";
import styles from "./join.module.css";
function Join() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1> Register form</h1>
        </div>
        <div className={styles.content}>
          <form action="">
            <div>
              <label htmlFor="">Name :</label>
              <input type="text" placeholder="Enter Your Name :" required />
            </div>
            <div>
              <label htmlFor="">Contact :</label>
              <input type="number" placeholder="Enter Your Number :" required />
            </div>
            <div>
              <label htmlFor="">Email :</label>
              <input type="email" placeholder="Enter Your Email :" required />
            </div>
            <div>
              <label htmlFor="">Password :</label>
              <input
                type="password"
                placeholder="Enter Your Pasword :"
                required
              />
            </div>
            <div className={styles.btn}>
              <input type="submit" value="Submit" className={styles.sub} />
              <input type="reset" value="Reset" className={styles.res} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Join;
