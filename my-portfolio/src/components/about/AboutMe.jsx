import React from "react";
import styles from "./About.module.css"
import Profile from "../../assets/Profile.jpg";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import Cv from '../../assets/Eniola Frontend Cv.Mau.pdf'
import Skills from "./Skills.jsx";
import Contact from "../contact/Contact.jsx";
import Footer from "../footer/Footer.jsx";


function AboutMe(){
    return(
      <section id={styles.about}>
        <div className={styles.aboutMeContainer}>
            
          <div className={styles.aboutSection}>
            <h2 className={styles.header}>
              About Me
            </h2>
            <p className={styles.aboutPara}>
              I’m Hauwa Abdulazeez, a UI/UX Designer and Frontend Developer passionate about crafting intuitive, visually compelling digital experiences. With 3 years of experience, I specialize in designing user-friendly interfaces, developing interactive prototypes, and ensuring seamless implementation of designs.
            </p>

            <p className={styles.aboutPara}>
              My journey started with a deep appreciation for aesthetics and problem-solving. While I was initially drawn to UI design through my background in graphic design, exploring user research, usability testing, and interaction design made me fall in love with the entire UX process. Over the years, I’ve led creative projects, collaborated closely with developers, and enhanced user engagement through data-driven design decisions.
            </p>

            <p className={styles.aboutPara}>
              To expand my expertise, I’ve worked on diverse projects, from Web3 dashboards to fashion brand identity design and modular design systems. I’m also on a journey to becoming a full-stack developer, further bridging the gap between design and development.
            </p>

            <p className={styles.aboutPara}>
              Beyond work, I love spending time with my family, baking, and going on road trips—whether it’s exploring new places or simply enjoying a scenic drive. These moments fuel my creativity and inspire my approach to design.
            </p>

            <p className={styles.aboutPara}>
              Let’s connect and create something amazing!
            </p>

            <div className={styles.headerSocials}>

              <div className={styles.cvButton}>
                <a href={Cv} className={styles.btn} target="_blank" rel="noopener noreferrer">
                  View CV
                </a>
              </div>

             
              <a
                href="https://www.linkedin.com/in/abdulazeez-eniola-hauwa-3ba5671a7/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a href="mailto:abdulazeezhauwa1997@gmail.com" target="_blank" rel="noreferrer">
                <AiOutlineMail/>
              </a>
              <a href="https://x.com/HauwaAbdulazee9" target="_blank" rel="noreferrer">
                <AiOutlineTwitter />
              </a>

            </div>


          </div>

          <div className={styles.aboutMeImage}>
            <img src={Profile} alt="" />
          </div> 
           
        </div>

        <Skills/>
        <Contact/>
        <Footer/>

      
    </section>
    
    )
}
export default AboutMe;