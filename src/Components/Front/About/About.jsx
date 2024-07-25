import React from "react";
import styles from "./About.module.css";
import image from "/images/coffee.jpg";
function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>About Us</h1>
        </div>
        <div className={styles.bodyContent}>
          <div className={styles.img}>
            <img src={image} alt="" />
          </div>
          <div className={styles.content}>
            <p>
              Welcome to Coffee Shop, where every cup tells a story. Nestled in
              the heart of XYZ, our coffee shop is more than just a place to
              grab your daily caffeine fix—it's a haven for coffee enthusiasts
              and a community hub for friends and family. We pride ourselves on
              sourcing the finest beans from around the world, meticulously
              roasted to perfection to bring out the rich, complex flavors in
              every brew. Whether you're here for a quick espresso, a leisurely
              latte, or a delectable pastry, our friendly baristas are dedicated
              to providing an exceptional experience with every visit. At Coffee
              Shop, we believe that great coffee has the power to inspire,
              connect, and create memories. Come in, sit back, and savor the
              moment.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
