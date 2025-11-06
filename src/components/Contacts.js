import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <h2>My Contacts</h2>
      <div>
        <p>
          Find me on GitHub:{" "}
          <a
            href="https://github.com/Hak-MMD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </p>
        <p>
          Connect with me on LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mykhaylo-maslyuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </p>
        <p>
          Email me at:{" "}
          <a href="mailto:myhamike@gmail.com">
            <MdEmail /> myhamike@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
