import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import CV from "./MykhayloMaslyukCV.pdf";

const Header = () => {
  const contact = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <header>
      <h1>Mykhaylo Maslyuk</h1>
      <nav>
        <ul>
          <li>
            <a href={CV} download className="btn">
              <FaFileDownload /> Download CV
            </a>
          </li>
          <li>
            <a className="contactLink" onClick={() => contact()}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
