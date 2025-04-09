import React from "react";
import styles from "./Header.module.css"
import Nav from "../Nav/nav";


function Header() {
  return (
    <section id={styles.home} className= {styles.header}>
      <Nav/>
      <div className= {styles.headerContainer}>
        <h5 className={styles.name}>👋 Hi there, I’m Hauwa Abdulazeez!</h5>
        <h5 className={styles.background}>I specialize in creating seamless designs, intuitive interfaces, and functional web applications. I blend human-centered design principles with modern frontend technologies to bring ideas to life. Let’s build something amazing together! 🚀</h5>
        <a href='#contact' className={styles.btnPrimary}>Let's Talk</a>
      </div>
    </section>
  );
};
export default Header;