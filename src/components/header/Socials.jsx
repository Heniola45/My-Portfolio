import React from "react";
import styles from "./Header.module.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function HeaderSocials() {
  return (
    <div className={styles.headerSocials}>
      <a
        href="https://www.linkedin.com/in/abdulazeez-eniola-hauwa-3ba5671a7/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Heniola45" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://x.com/HauwaAbdulazee9" target="_blank" rel="noreferrer">
        <AiOutlineTwitter />
      </a>
    </div>
  );
};
export default HeaderSocials;