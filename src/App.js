import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Page from "./components/Page";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import AboutMe from "./components/About";
// import Contact from "./components/Contacts";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import OtherExperience from "./components/OtherExperience";
// import Projects from "./components/Projects";

// function Landing() {
//   return (
//     <div className="App">
//       <Header />
//       <OtherExperience />
//       <AboutMe />
//       <Experience />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default Landing;
