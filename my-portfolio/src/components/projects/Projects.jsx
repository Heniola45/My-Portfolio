import React from "react";
import styles from "./Projects.module.css";


function Projects(){
  return (
    
    <section id={styles.projects}>
      <div>
        <h2 className={styles.heading}>Services</h2>
      </div>
      
      
      <div className={styles.aboutCards}>

            <article className={styles.aboutCard}>
                <h5>🖥️ Frontend Development</h5>
                  <ul>
                    <li>Responsive Frontend Development using React & JavaScript.</li>
                    <li>Pixel-perfect implementation of UI designs.</li>
                    <li>Optimized performance & accessibility for better user experience.</li>
                  </ul>
                
            </article>


            <article className={styles.aboutCard}>
                <h5>🎨 UI/UX Design</h5>
                  <ul>
                    <li>Intuitive User Interface Design for web & mobile.</li>
                    <li>Engaging User Experience Design with a focus on usability.</li>
                    <li>Design Systems & Branding for consistency and strong visual identity.</li>
                  </ul>
                
            </article>
            
            
            <article className={styles.aboutCard}>
                <h5>🔍 User Research & Usability Testing</h5>
                  <ul>
                    <li>Data-driven User Research & Analysis.</li>
                    <li>Usability Testing to refine product experience.</li>
                    <li>Optimizing user flows for better engagement & conversion.</li>
                  </ul>
                
            </article>
       
      </div>
      <div className={styles.btnContainer}>
                <a href="#projects" className={styles.btnPrimary}>
                  See Projects
                </a>
      </div>
                   
                    
    
    </section>
  );
};
export default Projects;