import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = ({ contacts }) => {
  console.log(contacts);
  return (
    <section>
      <h2>My Contacts</h2>
      <div>
        {contacts.map((item, index) => (
          <p key={index}>
            {item.description}{" "}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </p>
        ))}
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
