import React from "react";

const Projects = ({ projects }) => {
  // const projects = [
  //   {
  //     title: "Stock Trading App",
  //     description:
  //       "This app provides you with a demo account where you can buy/sell shares to improve your trading experience.",
  //     link: "https://github.com/Hak-MMD/mern_shares",
  //   },
  //   {
  //     title: "Helper",
  //     description:
  //       "This is a program with the help of which you will ask or answer questions on any topic with ease!s",
  //     link: "https://github.com/Mykola-DMT/Helper",
  //   },
  //   // Add more projects as needed
  // ];

  return (
    <section>
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
