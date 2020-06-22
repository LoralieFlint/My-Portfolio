import React from "react";
import "../App.css";

function SkillsSection () {

    return (
        <div id="skills" className="skills">
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
    )
}
export default SkillsSection