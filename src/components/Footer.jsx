import '../App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const linkedin = "https://www.linkedin.com/in/anthony-pinski-380923302/";
  const github = "https://github.com/Verred01"
  return (
    <footer>
      <h4>
        LinkedIn+GitHub
      </h4>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
    </footer>
  );
}


export default Footer;