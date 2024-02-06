import './App.css';
import AboutMe from './components/About';
import Contact from './components/Contacts';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import OtherExperience from './components/OtherExperience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <OtherExperience />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
