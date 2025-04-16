import { Link } from "react-router-dom";
import React from "react";
import styles from "./About.module.css"
import Profile from "../../assets/Profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About(){
    return(
      <section id="about">
        <div className={styles.mainAbout}>
          <h2 className={styles.heading}>About Me</h2>
          
          
          <div className={styles.aboutContainer}>
            
            
            <div className={styles.aboutMe}>
              <div className={styles.aboutImage}>
              <img src={Profile} alt="" />
              </div>
            </div>

            <div className={styles.aboutContent}>
      
              <div className={styles.aboutCards}>
                
                <article className={styles.aboutCard}>
                  <FaAward className={styles.aboutIcon} />
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
                </article>
                <article className={styles.aboutCard}>
                  <FiUsers className={styles.aboutIcon} />
                  <h5>Clients</h5>
                  <small>2+ Clients worldwide</small>
                </article>
                <article className={styles.aboutCard}>
                  <VscFolderLibrary className={styles.aboutIcon} />
                  <h5>Projects</h5>
                  <small>5 Projects completed</small>
                </article>
              </div>
              <p>
              A Frontend Developer and a skilled UI/UX Designer, passionate about crafting intuitive and visually compelling digital experiences. With 3 years of experience, I specialize in designing user-friendly interfaces, developing interactive prototypes, and ensuring seamless implementation of designs. I am currently on a journey to becoming a fullstack developer.
              </p>
              
              <Link to="/about" className="btn btn-primary">
                See More
              </Link>
            </div>
        </div>
        </div>
  

    </section>
    )
}
export default About