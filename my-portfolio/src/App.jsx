import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import AboutMe from "./components/about/AboutMe.jsx";
import Nav from "./components/Nav/nav.jsx";
import ProjectsDetails from "./components/projects/ProjectsDetail.jsx";


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
