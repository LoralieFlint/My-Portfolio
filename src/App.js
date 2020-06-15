import React from "react";
import "./App.css";
import profilePic from "../src/img/prtfolio-pic.jpg";
import ProjectOne from "../src/img/Capture (2).PNG"
import ".../../font-awesome/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="headerHolder">
        <div className="header">
          <h1 className="name">Loralie Flint</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
      <div className="aboutHolder">
        <div className="about">
          <img className="profilePic" src={profilePic} alt="profile pic"></img>
          <div className="center">
            <h4 className="aboutme">About Me</h4>
            <p className="aboutme">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains.
            </p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3 className="skillsSection">Skills And Technologies</h3>
        <div className="theList">
          <p className="headings">Languages</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Postgres</li>
        </div>
        <div className="theList">
          <p className="headings">Libraries / Frameworks </p>
          <li>React.js</li>
          <li>Redux</li>
          <li>LESS</li>
          <li>Styled-Components</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Knex.js</li>
          <li>bcrypt.js</li>
          <li>Jest</li>
          <li>Cypress</li>
        </div>
        <div className="theList">
          <p className="headings">Tools</p>
          <li>Git</li>
          <li>GitHub</li>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>GitBash</li>
          <li>Insomnia</li>
          <li>Postman</li>
          <li>SQLiteStudio</li>
        </div>
        <div className="theList">
          <p className="headings">Related Skills</p>
          <li>Object Oriented Programming</li>
          <li>Test Driven Development</li>
          <li>Pair Programming</li>
          <li>AGILE Development</li>
          <li>RESTful APIs</li>
          <li>Project Management</li>
        </div>
      </div>
      <div className="projects">
      <h2 className="projectHeading">Projects</h2>

        <div className="project">
          <h5 className="projectTitle">Git Stats</h5>
          <div className="picholder">
          <img className="gitstats" src={ProjectOne} alt=" git stats project"></img>
          </div>          
          <p>On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when</p>
        </div>  
        <div className="project">
          <h5 className="projectTitle">Project 2</h5>
          <div className="picholder">
          <img className="gitstats" src={ProjectOne} alt=" git stats project"></img>
          </div>         
           <p>On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when</p>
        </div>  
        <div className="project">
          <h5 className="projectTitle">Project 3</h5>
          <div className="picholder">
          <img className="gitstats" src={ProjectOne} alt=" git stats project"></img>
          </div>         
           <p>On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when</p>
        </div>
        <div className="project">
          <h5 className="projectTitle">Project 4</h5>
          <div className="picholder">
          <img className="gitstats" src={ProjectOne} alt=" git stats project"></img>
          </div>
          <p>On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when</p>
        </div>  
      
      </div>
      <div className="contact">
        <h4 className="contactTitle">Contact Me</h4>
      <i class="fa fa-google fa-3x icons gmail" aria-hidden="true"></i>
      <i class="fa fa-twitter fa-3x icons twitter" aria-hidden="true"></i>
      <i class="fa fa-linkedin-square fa-3x icons linkedin" aria-hidden="true"></i>
      <i class="fa fa-github fa-3x icons github" aria-hidden="true"></i>

      </div>
    </div>
  );
}
export default App;
