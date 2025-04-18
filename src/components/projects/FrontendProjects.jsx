import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import recipeImage from "../../assets/Recipe_Project.jpeg"; 
import meetupImage from "../../assets/MeetImage.jpeg";
import signUpImage from "../../assets/Signup.jpeg"
import axonImage from "../../assets/Axonui.jpeg"
import counterImage from "../../assets/Counter.jpeg"
import calculatorImage from "../../assets/Calculator.jpeg";
import "./FrontendProjects.css"; 
import Footer from "../footer/Footer";

const projects = [
    {
      id: 1,
      title: "Recipe Card",
      description: "A simple and visually appealing recipe card built using HTML and CSS. The design features a structured layout with clear typography, vibrant images, and well-organized sections for ingredients and instructions. This project demonstrates responsive styling and an intuitive user experience for showcasing recipes effectively.",
      image: recipeImage,
      tech: ["HTML", "CSS"],
      websiteLink: "https://heniola45.github.io/Recipe-Page/",
      githubLink: "https://github.com/Heniola45/Recipe-Page",
    },
    {
      id: 2,
      title: "MeetUp Landing Page",
      description: "This MeetUp landing page is a dynamic and responsive design created using Flexbox, showcasing the power of CSS for modern web layouts. The page features a welcoming header with event details, an engaging about section, and a gallery highlighting past events, all elegantly arranged to provide an intuitive user experience.",
      image: meetupImage,
      tech: ["HTML", "CSS", "Flexbox"],
      websiteLink: "https://heniola45.github.io/Meeting-Landing-Page/",
      githubLink: "https://github.com/Heniola45/Meeting-Landing-Page",
    },
    {
      id: 3,
      title: "Newsletter SignUp Form",
      description: "A clean and modern newsletter sign-up form built using HTML, CSS, and JavaScript. This responsive component features a user-friendly interface with accessible form fields and engaging styling. Upon successful form submission, users receive a visually distinct success message confirming their subscription. The form includes input validation and adapts seamlessly to different screen sizes, making it ideal for landing pages, blogs, and marketing websites.",
      image: signUpImage,
      tech: ["HTML", "CSS", "Javascript"],
      websiteLink: "https://heniola45.github.io/A-Newsletter-Sign-Up-Form/",
      githubLink: "https://github.com/Heniola45/A-Newsletter-Sign-Up-Form",
    },
    {
        id: 4,
        title: "Calculator App",
        description: "The Calculator App is a responsive web-based calculator built using React.js. It provides users with a clean and intuitive interface to perform basic arithmetic operations such as addition, subtraction, multiplication, division, percentages, and parentheses handling. Designed with usability and responsiveness in mind, the app works seamlessly across various screen sizes and supports both button clicks and keyboard inputs for accessibility and convenience.",
        image: calculatorImage,
        tech: ["React"],
        websiteLink: "https://heniola45.github.io/CalculatorApp/",
        githubLink: "https://github.com/Heniola45/CalculatorApp",
    },
    {
        id: 5,
        title: "Axon UI",
        description: "Axon UI is a sleek, scalable UI library built for designers and developers who want to create modern interfaces faster. Designed in Figma and implemented with React, it provides a growing set of reusable components that are accessible, customizable, and consistent across products. With Axon UI, you can accelerate your workflow while maintaining design integrity from concept to code.",
        image: axonImage,
        tech: ["React", "Javascript"],
        websiteLink: "http://axonui.design/",
        githubLink: "https://github.com/Heniola45/Axon-UI",
    },
    {
        id: 6,
        title: "Calorie Counter",
        description: "Calorie Counter is a simple and interactive web app designed to help users track their daily calorie intake. Built with HTML, CSS, and JavaScript, it features an intuitive interface for logging food items, calculating total calories, and promoting healthier eating habits. The app supports real-time updates, responsive design, and an easy-to-use layout for seamless user experience across devices.",
        image: counterImage,
        tech: ["HTML", "CSS", "Javascript"],
        websiteLink: "https://heniola45.github.io/A-Calorie-Counter/",
        githubLink: "https://github.com/Heniola45/A-Calorie-Counter",
    },
      
  ];
  
  function FrontendProjects() {
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
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="projectLink">
                    <FaGlobe /> Visit Website
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projectLink">
                    <FaGithub /> View on GitHub
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
export default FrontendProjects;
