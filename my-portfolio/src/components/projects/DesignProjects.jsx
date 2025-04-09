import React from "react";
import { SiFigma} from 'react-icons/si';
import { FaGlobe} from 'react-icons/fa';
import kbmImage from "../../assets/KBM.webp"; 
import tickedImage from "../../assets/Ticked.png";
import prelovedImage from "../../assets/Preloved.webp";
import axonImage from "../../assets/Axonui.jpeg";
import citroneImage from "../../assets/Citrone.webp";
import akoriImage from "../../assets/Akori.png";
import handyManImage from "../../assets/HandMan.png";
import devAskImage from "../../assets/DevAsk.png";
import "./DesignProjects.css"; 
import Footer from "../footer/Footer";

const projects = [
    {
      id: 1,
      title: "Ticked App",
      description: "Ticked is a virtual assistant service designed to streamline your day-to-day tasks and maximize your productivity. Whether you’re a busy professional or managing multiple responsibilities, Ticked helps you stay on top of your to-do list with ease.",
      image: tickedImage,
      tech: ["Figma"],
      figmaLink: "https://www.figma.com/design/gZVzrAyQrhBCUWgjY3qSob/Ticked---New-File--Case-Study-?node-id=6290-40798&t=S1z97iSXmTv3sSL3-1",
      caseStudyLink: "https://www.figma.com/design/gZVzrAyQrhBCUWgjY3qSob/Ticked---New-File--Case-Study-?node-id=6290-40798&t=S1z97iSXmTv3sSL3-1",
    },
    {
      id: 2,
      title: "Preloved Web Application",
      description: "Preloved is your go-to platform for discovering and sharing pre-owned items — whether you’re looking to declutter or find great deals. It’s simple, sustainable, and built to connect people who care about reuse and conscious living.",
      image: prelovedImage,
      tech: ["Figma"],
      figmaLink: "https://www.figma.com/design/wFv7OhQhqHTxO5ISrwiU1s/Preloved-Hauwa-s-Copy?node-id=0-1&t=TDG4lhPFwctfv1uM-1",
      caseStudyLink: "https://contra.com/p/ZXQQQ6mP-preloved",
    },
    {
      id: 3,
      title: "Axon UI",
      description: "Axon UI is a sleek, scalable UI library built for designers and developers who want to create modern interfaces faster. Designed in Figma and implemented with React, it provides a growing set of reusable components that are accessible, customizable, and consistent across products. With Axon UI, you can accelerate your workflow while maintaining design integrity from concept to code.",
      image: axonImage,
      tech: ["Figma"],
      figmaLink: "https://www.figma.com/design/FJCudkY5EhIqaLxUPWhQlU/Axon-UI?node-id=0-1&t=b5VD12GQN9qEFFgd-1",
      caseStudyLink: "https://github.com/Heniola45/Axon-UI",
    },
    {
      id: 4,
      title: "KBM’s Educational Consult website",
      description: "Know the Blocks Maven is an educational consult passionate about educating Know the Blocks Maven is an educational consult passionate about educating and training young adults, and Special Needs fellows about the Web3 and Blockchain ecosystem.",
      image: kbmImage,
      tech: ["Figma"],
      figmaLink: "https://www.figma.com/design/n1q76LZXNWksSvJwYivMLd/KBM-Project-Hauwa-s-Copy?node-id=0-1&t=s84yU1xhh84VQGH1-1",
      caseStudyLink: "https://contra.com/p/7BYNgkEY-redesigning-kbms-educational-consult-website",
    },
    {
      id: 5,
      title: "Redesign of Citrone",
      description: "Citrone is a learning management system (LMS) where users plan, implement and assess a specific learning process. It enables tutors to upload learning content, deliver lessons to students, get notifications and share data with authorized users.",
      image: citroneImage,
      tech: ["Figma"],
      figmaLink: "https://www.figma.com/design/ZL467dzYt9UZtZ4WC6dl6M/Citrone-wireframe-1?node-id=792-5375&t=KFwGvOhmR3ZApPAu-1",
      caseStudyLink: "https://contra.com/p/Nqc6XLLc-citrone-redesign-behance",
    },
    {
      id: 6,
      title: "Akori Dashboard Redesign",
      description: "The redesigned Akori Dashboard presents a clean, data-driven interface tailored for SocialFi and DeFi token tracking. With over 5000 tokens monitored in real time, this dashboard is designed for clarity, performance insight, and user engagement.",
      image: akoriImage,
      tech: ["Figma"],
      websiteLink: "https://www.figma.com/design/HbiVZjyHVXOOySQQWef5Ud/Akori-Dashboard?node-id=2087-5791&t=HLE1hpdRjumndJ5q-1",
      caseStudyLink: "https://www.figma.com/design/HbiVZjyHVXOOySQQWef5Ud/Akori-Dashboard?node-id=2087-5791&t=HLE1hpdRjumndJ5q-1",
    },
    {
      id: 7,
      title: "HandyMan",
      description: "The HandyMan platform is a digital solution designed to seamlessly connect homeowners with trusted artisans for home repairs and maintenance. This landing page introduces the platform with a friendly, action-driven interface to boost conversions and user engagement.",
      image: handyManImage,
      tech: ["Figma"],
      websiteLink: "https://www.figma.com/design/CNQpRSVhMAaoWDvao695CL/Handyman-Application-Design?node-id=6-2&t=NoX2zvzDIcVEXceM-1",
      caseStudyLink: "https://www.figma.com/design/CNQpRSVhMAaoWDvao695CL/Handyman-Application-Design?node-id=6-2&t=NoX2zvzDIcVEXceM-1",
    },
    {
      id: 8,
      title: "DevAsk – Developer Q&A Social Platform",
      description: "DevAsk is a modern, developer-focused social Q&A platform inspired by StackOverflow but infused with community-driven features and a vibrant, interactive design. The goal is to provide a space where developers can not only ask technical questions but also build a supportive network and share experiences.",
      image: devAskImage,
      tech: ["Figma"],
      websiteLink: "https://www.figma.com/design/6D7nFUEI38kEoh1JOToWNo/DevAsk?node-id=0-1&t=vQYc5epR4oBvTp2h-1",
      caseStudyLink: "https://www.figma.com/design/6D7nFUEI38kEoh1JOToWNo/DevAsk?node-id=0-1&t=vQYc5epR4oBvTp2h-1",
    },
      
  ];
  
  function DesignProjects() {
    return (
      <section className="projectsContainer">
        <h1 className="sectionTitle">Project Showcase</h1>
        <div className="projectsGrid">
          {projects.map((project) => (
            <div key={project.id} className="projectCard">
              <img src={project.image} alt={project.title} className="projectImage" />
              <div className="overlay">
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectDescription">{project.description}</p>
                <div className="techStack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="techTag">{tech}</span>
                  ))}
                </div>

                <div className="projectLinks">
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="projectLink">
                    <SiFigma /> View on Figma
                  </a>
                  <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer" className="projectLink">
                    <FaGlobe /> View CaseStudy
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </section>
    );
  }
export default DesignProjects;
