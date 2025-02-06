import React from "react";

const Experience = ({ skill }) => {
  skill.list.map((item, index) => {
    console.log(item);
  });
  return (
    <section>
      <h2>Skills</h2>
      <div style={{ fontSize: "19px" }}>
        <ul>
          {skill.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Professional Experience</h3>
        <p>{skill.text}</p>
      </div>
    </section>
  );
};

export default Experience;
