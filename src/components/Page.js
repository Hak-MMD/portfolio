import AboutMe from "./About";
import Contact from "./Contacts";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import OtherExperience from "./OtherExperience";
import Projects from "./Projects";
import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const [data, setData] = useState({
    skill: {
      list: [],
      text: "",
    },
    experience: {},
    about: "",
    footer: "",
    projects: [],
    contacts: [],
  });
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api-portfolio-hak.onrender.com/data"
      );
      setData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Conditional rendering to ensure data is available before rendering child components
  if (data.about.split("").length > 0) {
    return (
      <>
        <Header />
        {/* Pass data to child components */}
        <OtherExperience experience={data.experience} />
        <Experience skill={data.skill} />
        <Projects projects={data.projects} />
        <AboutMe about={data.about} />
        <Contact contacts={data.contacts} />
        <Footer footer={data.footer} />
      </>
    );
  }

  return (
    <p>Loading...</p> // You can use a more sophisticated loading component her
  );
}

export default Page;
