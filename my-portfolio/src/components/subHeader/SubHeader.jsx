import Me from "../../assets/Hauwa.jpeg";
import HeaderSocials from "../header/Socials.jsx";
import styles from"./SubHeader.module.css";

function SubHeader() {
  return (
    <div className={styles.subHeaderContainer}>
      <HeaderSocials />
      <div className={styles.me}>
        <img src={Me} alt="my me me" />
      </div>
      <div className={styles.scrollDown}>
        <a href="#contact">Scroll Down</a>
      </div>
    </div>
  );
};
export default SubHeader;