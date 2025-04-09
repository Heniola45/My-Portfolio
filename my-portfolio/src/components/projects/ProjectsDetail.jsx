import { Link } from "react-router-dom";
import "./ProjectsDetails.css"

function ProjectsDetails (){
    return(
        <section className="projectContainer">
            <div className="frontend">
                <h1 className="projectHeader">I Build Websites</h1>
                <p className="projectPara">I develop web applications using a range of the best tools available, but React is my framework of choice for its versatility and efficiency.</p>
                <Link to="/frontendproject" className="buildButton">
                    See What I've Built
                </Link>
            </div>

            <div className="design">
                <h1 className="projectHeader">I Design Websites</h1>
                <p className="projectPara">I create stunning websites, mobile apps, and web applications with Figma, leveraging its powerful design capabilities to deliver exceptional user experiences.</p>
                <Link to="/designproject" className="designButton">
                    Check My Designs
                </Link>


            </div>
        </section>
    )
};
export default ProjectsDetails;