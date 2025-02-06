import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
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
      axios
        .get("https://api-portfolio-hak.onrender.com/data")
        .then((response) => {
          setData(response.data[0]);
          console.log("response:   ", response.data[0]);
          console.log("data:   ", data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async () => {
    console.log(
      localStorage.getItem("username"),
      localStorage.getItem("password")
    );

    console.log("data:  ", data);
    try {
      axios
        .patch(
          "https://api-portfolio-hak.onrender.com/editData",
          { data },
          {
            auth: {
              username: localStorage.getItem("username"),
              password: localStorage.getItem("password"),
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            alert("Saved successfully!");
            console.log("data:   ", data);
          }
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = (e, path) => {
    const value = e.target.value;
    const keys = path.split(".");
    setData((prevData) => {
      const newData = { ...prevData };
      keys.reduce((acc, key, index) => {
        if (index === keys.length - 1) {
          acc[key] = value;
        }
        return acc[key];
      }, newData);
      return newData;
    });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...data.skill.list];
    updatedSkills[index] = value;
    setData((prevData) => ({
      ...prevData,
      skill: { ...prevData.skill, list: updatedSkills },
    }));
  };

  const addSkill = () => {
    setData((prevData) => ({
      ...prevData,
      skill: { ...prevData.skill, list: [...prevData.skill.list, ""] },
    }));
  };

  const addProject = () => {
    setData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        { title: "", description: "", link: "" },
      ],
    }));
  };

  const addContact = () => {
    setData((prevData) => ({
      ...prevData,
      contacts: [
        ...prevData.contacts,
        { title: "", description: "", link: "" },
      ],
    }));
  };

  const removeSkill = (index) => {
    const filteredSkills = data.skill.list.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      skill: { ...prevData.skill, list: filteredSkills },
    }));
  };

  const removeProject = (index) => {
    console.log(index);
    const filteredProjects = data.projects.filter((_, i) => i !== index);

    setData((prevData) => ({
      ...prevData,
      projects: [...filteredProjects],
    }));
  };

  const removeContact = (index) => {
    console.log(index);
    const filteredContacts = data.contacts.filter((_, i) => i !== index);

    setData((prevData) => ({
      ...prevData,
      contacts: [...filteredContacts],
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="admin-container">
      <h2>Profile Editor</h2>

      <div className="section">
        <h3>About</h3>
        <label>About Me:</label>
        <textarea
          value={data?.about}
          onChange={(e) => handleInputChange(e, "about")}
          rows={7}
          required
        />
      </div>

      <div className="section">
        <h3>Skills</h3>
        <label>Skills List:</label>
        <div className="skills-list">
          {data?.skill.list.map((skill, index) => (
            <div className="skill-item" key={index}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                required
              />
              <button onClick={() => removeSkill(index)}>Delete</button>
            </div>
          ))}
          <button onClick={addSkill} className="add-skill">
            + Add Skill
          </button>
        </div>
        <div className="skills-text">
          <label>Skills Text:</label>
          <textarea
            value={data?.skill.text}
            onChange={(e) => handleInputChange(e, "skill.text")}
            rows={7}
            required
          />
        </div>
      </div>

      <div>
        <h3>Experience</h3>
        <label>Clients:</label>
        <input
          type="number"
          value={data?.experience.clients}
          onChange={(e) => handleInputChange(e, "experience.clients")}
          required
        />
        <label>Years:</label>
        <input
          type="number"
          value={data?.experience.years}
          onChange={(e) => handleInputChange(e, "experience.years")}
          required
        />
        <label>Projects:</label>
        <input
          type="number"
          value={data?.experience.projects}
          onChange={(e) => handleInputChange(e, "experience.projects")}
          required
        />
      </div>

      <div>
        <h3>Projects</h3>
        {data?.projects.map((project, index) => (
          <div className="project-item" key={index}>
            <label>Project Title:</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => {
                const updatedProjects = [...data?.projects];
                updatedProjects[index].title = e.target.value;
                setData((prevData) => ({
                  ...prevData,
                  projects: updatedProjects,
                }));
              }}
              required
            />
            <label>Description:</label>
            <textarea
              value={project.description}
              onChange={(e) => {
                const updatedProjects = [...data?.projects];
                updatedProjects[index].description = e.target.value;
                setData((prevData) => ({
                  ...prevData,
                  projects: updatedProjects,
                }));
              }}
              rows={4}
              required
            />
            <label>Link:</label>
            <input
              type="url"
              value={project.link}
              onChange={(e) => {
                const updatedProjects = [...data?.projects];
                updatedProjects[index].link = e.target.value;
                setData((prevData) => ({
                  ...prevData,
                  projects: updatedProjects,
                }));
              }}
              required
            />

            <button onClick={() => removeProject(index)}>Delete</button>
          </div>
        ))}
        <button
          style={{ width: "95%" }}
          onClick={addProject}
          className="add-skill"
        >
          + Add Project
        </button>
      </div>

      <div>
        <h3>Contacts</h3>
        {data?.contacts.map((contact, index) => (
          <div className="project-item" key={index}>
            <label>Description</label>

            <input
              type="text"
              value={contact.description}
              onChange={(e) => {
                const updatedContacts = [...data?.contacts];
                updatedContacts[index].description = e.target.value;
                setData((prevData) => ({
                  ...prevData,
                  contacts: updatedContacts,
                }));
              }}
              required
            />

            <label>Title</label>

            <input
              type="text"
              value={contact.title}
              onChange={(e) => {
                const updatedContacts = [...data?.contacts];
                updatedContacts[index].title = e.target.value;
                setData((prevData) => ({
                  ...prevData,
                  contacts: updatedContacts,
                }));
              }}
              required
            />
            <label>Link</label>

            <input
              type="url"
              value={contact.link}
              onChange={(e) => {
                const updatedContacts = [...data?.contacts];
                updatedContacts[index].link = e.target.value;
                setData((prevData) => ({
                  ...prevData,
                  contacts: updatedContacts,
                }));
              }}
              required
            />
            <button onClick={() => removeContact(index)}>Delete</button>
          </div>
        ))}
        <button
          style={{ width: "95%" }}
          onClick={addContact}
          className="add-skill"
        >
          + Add Project
        </button>
      </div>

      <div className="section">
        <h3>Footer</h3>
        <label>Footer Text:</label>
        <input
          type="text"
          value={data?.footer}
          onChange={(e) => handleInputChange(e, "footer")}
          required
        />
      </div>

      <button className="add-skill" onClick={() => editData()}>
        Save
      </button>
    </div>
  );
};

export default Admin;
