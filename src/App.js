import Contacts from "./components/Contact/contacts";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
