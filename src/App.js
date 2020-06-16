import React from "react";
import "./App.css";
import profilePic from "../src/img/prtfolio-pic.jpg";
import ProjectOne from "../src/img/Capture (2).PNG";
import ".../../font-awesome/css/font-awesome.min.css";
import styled from "styled-components";

const Gmail = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;

  :hover {
    background-color: #B23121;
    color: black;
  }
}
`;
const Twitter = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;

  :hover {
    background-color: #1DA1F2;
    color: white;
  }
`;
const Linkedin = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;

  :hover {
    background-color: #0072b1;
    color: white;
  }
`;
const Github = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;

  :hover {
    background-color: #0072b1;
    color: black;
  }
`;
const Fcc = styled.a`
background-color: #656565;
border-radius: 50%;
margin: 20px;

:hover {
  background-color: green;
  color: black;
}
`;
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
            <p>
              Since I was about 10 years old I was always fascinated with
              technology. My fascination stems from my dad, who is completely
              blind, and has worked in the tech industry since I can remember.
              Everything he did for work always intrigued me and showed me no
              matter the disability we are born with we can transform that into
              endless possibilities. My fascination with technology grew from
              the new phones being released to computers and coding. Thanks to
              my dad, I love coding; that and music is my passion.
            </p>
            <p>
              I currently attend Lambda School studying Full-Stack Web
              Development. My primary focus and inspiration is web development.
              About a month into my journey with Lambda School I was diagnosed
              with a benign brain tumor and was told this was something that
              required surgery. It's been my goal to continue on my journey and
              less than two months out of surgery I returned back to school to
              keep learning what I love to do.
            </p>
            <p>
              I am driven, focused and self-motivated and I want to pursue my
              passion wherever it may lead me. I am very passionate about web
              development, and look forward to being your next full-stack web
              developer.
            </p>
            <p>HTML, CSS, LESS, Javascript, React, Redux, Node.</p>
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
            <img
              className="gitstats"
              src={ProjectOne}
              alt=" git stats project"
            ></img>
          </div>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when
          </p>
        </div>
        <div className="project">
          <h5 className="projectTitle">Project 2</h5>
          <div className="picholder">
            <img
              className="gitstats"
              src={ProjectOne}
              alt=" git stats project"
            ></img>
          </div>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when
          </p>
        </div>
        <div className="project">
          <h5 className="projectTitle">Project 3</h5>
          <div className="picholder">
            <img
              className="gitstats"
              src={ProjectOne}
              alt=" git stats project"
            ></img>
          </div>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when
          </p>
        </div>
        <div className="project">
          <h5 className="projectTitle">Project 4</h5>
          <div className="picholder">
            <img
              className="gitstats"
              src={ProjectOne}
              alt=" git stats project"
            ></img>
          </div>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when
          </p>
        </div>
      </div>
      <div className="contact">
        <h4 className="contactTitle">Contact Me</h4>
        <Gmail
            href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=subject_here&body=body_here" target="_blank_">
            <i class="fa fa-google fa-3x " aria-hidden="true"></i>
        </Gmail>
        <Twitter href="https://twitter.com/LoralieFlint" target="_blank_">
          <i class="fa fa-twitter fa-3x twitter" aria-hidden="true"></i>
        </Twitter>
        <Linkedin href="https://www.linkedin.com/in/loralie-flint/" target="_blank_">
        <i class="fa fa-linkedin-square fa-3x linkedin"aria-hidden="true"></i>
        </Linkedin>
      <Github href="https://github.com/LoralieFlint" target="_blank_">
      <i class="fa fa-github fa-3x github" aria-hidden="true"></i>
      </Github>
      <Fcc href="https://www.freecodecamp.org/laflint92" target="_blank_">
      <i class="fa fa-free-code-camp fa-3x" aria-hidden="true"></i>
      </Fcc>
      </div>
    </div>
  );
}
export default App;
