// import { Route, Router, Routes } from "react-router-dom";
import Contacts from "./components/Contact/contacts";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Technologies from "./components/Technologies/technologies";
import Works from "./components/Works/works";
// import SeeMore from "./components/SeeMore/seeMore";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      {/* <SeeMore /> */}
      <Technologies />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
