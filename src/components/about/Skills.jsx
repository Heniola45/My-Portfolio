import styles from "./Skills.module.css"
import Me from "../../assets/Hauwa.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
    const [activeTab, setActiveTab] = useState("hardSkills");

    return (
        <div className={styles.skillSection}>

            <div className={styles.skillsImage}>
                <img src={Me} alt="My Portrait" className={styles.portrait} />
            </div>
    
        
            <div className={styles.skills}>
                <h2 className={styles.skillsHeader}>My Skills</h2>
    
                {/* Tab Buttons */}
                <div className={styles.tabButtons}>
                    <button 
                        className={`${styles.tabButton} ${activeTab === "hardSkills" ? styles.activeButton : ""}`}
                        onClick={() => setActiveTab("hardSkills")}
                    >
                        HARD SKILLS
                    </button>
                    <button 
                        className={`${styles.tabButton} ${activeTab === "tools" ? styles.activeButton : ""}`}
                        onClick={() => setActiveTab("tools")}
                    >
                        TOOLS
                    </button>
                </div>
                
                {/* Skill List Animation */}
                <motion.div 
                    key={activeTab} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.skillListContainer}>
                        {activeTab === "hardSkills" ? (
                            <ul className={styles.skillList}>
                                <li>Frontend Development</li>
                                <li>Version Control</li>
                                <li>UI/UX Design</li>
                                <li>UX Research</li>
                                <li>Design Systems</li>
                                <li>Usability Testing</li>
                                <li>Prototyping</li>
                                <li>Project Management</li>
                            </ul>
                        ) : (
                            <ul className={styles.skillList}>
                                <li>Visual Studio Code</li>
                                <li>Visual Studio</li>
                                <li>Figma</li>
                                <li>Git</li>
                                <li>Jira</li>
                                <li>Slack</li>
                            </ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
        
    );
    
}

export default Skills;
