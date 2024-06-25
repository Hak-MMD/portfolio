import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import CV from './CV.pdf'

const Header = () => {


  return (
    <header>
      <h1>Mykhaylo Maslyuk</h1>
      <nav>
        <ul>
          <li>
            <a href={CV} download className='btn'>
              <FaFileDownload /> Download CV    
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;