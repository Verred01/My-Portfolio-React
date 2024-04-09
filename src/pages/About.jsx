import '../App.css'
import img from '../assets/images/Profile Picture.jpg'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
    <div className = "about">
    <p>
        My name is Anthony Pinski and I'm a Full Stack Web Developer thanks to the University of Utah Coding Boot Camp.
        I have a background in customer service, janitorial work, and maintenance work and am excited to bring those skills and work ethic I've learned to the tech industry.
        I have a passion for creating and developing applications that are user-friendly and efficient.
        I have experience in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, and more.
        I am a quick learner and enjoy working in a team environment.
        I am excited to bring my skills to a new team and help create amazing applications.
        Please feel free to reach out to me with any questions or opportunities.
      </p>
      <img className ="profile" src ={img} alt="My Profile" />
    </div>
    </div>
  );
}