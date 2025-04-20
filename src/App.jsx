import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import AboutMe from "./components/about/AboutMe.jsx";
import ProjectsDetails from "./components/projects/ProjectsDetail.jsx";
import FrontendProjects from "./components/projects/FrontendProjects.jsx";
import DesignProjects from "./components/projects/DesignProjects.jsx";
import ContactPage from "./components/contact/ContactPage.jsx";
import Layout from "./components/nav/Layout.jsx";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsDetails />} />
          <Route path="/frontendproject" element={<FrontendProjects />} />
          <Route path="/designproject" element={<DesignProjects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
  );
}

export default App;
