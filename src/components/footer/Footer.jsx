import React from "react";
import styles from "./Footer.module.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div id={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyRight}>© 2025 Hauwa Abdulazeez</p>

        <div className={styles.headerSocials}>
          <a
            href="https://www.linkedin.com/in/abdulazeez-eniola-hauwa-3ba5671a7/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="mailto:abdulazeezhauwa1997@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail />
          </a>
          <a href="https://x.com/HauwaAbdulazee9" target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
