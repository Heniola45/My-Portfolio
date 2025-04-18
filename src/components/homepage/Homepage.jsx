import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Projects from "../projects/Projects";
import SubHeader from "../subHeader/SubHeader";

function Home(){
    return(
        <div>
            <Header/>
            <SubHeader/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home;