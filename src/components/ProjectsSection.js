import React from "react";
import "../App.css";
import ProjectOne from "../img/Capture (2).PNG";
import DomesticViolence from "../img/DV.jpg"
import Top9 from "../img/myTop9.PNG"

function ProjectSection () {

    return (
        <div id="projects" className="projects">
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
          <p className="projectbio">
           Git Stats is our labs project where you can get details of repositories that you have on github. 
           You can also compare charts from your repository to what would be considered a successful repository, 
           along with liking a repository and it not affecting it on github.
           On this project there are 3 web devs and 3 data science students along the span of 3 months.
           some of the languages we used are React, ContextAPI, Postgres, Sequelize, and passportJS. <br/>
           our application  <button href="https://commit-analysis.herokuapp.com/" target="_blank_" className="button">Application </button>  <br/>
           our repository <button href="https://github.com/Lambda-School-Labs/github-commit-analysis-fe" target="_blank_" className="button">Github</button>
          </p>
        </div>
        <div className="project">
          <h5 className="projectTitle">domestic violence</h5>
          <div className="picholder">
            <img
              className="gitstats"
              src={DomesticViolence}
              alt="domestic violence project"
            ></img>
          </div>
          <p className="projectbio">
          This project is a calculator meant to help those dealing with domestic violence to see how much they can save or do in a month.
          In this project I was the only back end developer.
          Some of the tech stack used NodeJS, ExpressJS, Knex, sqLite3, and JTW (JSON Web Tokens). <br />
          Our application  <button href="https://dvstbuild.netlify.app/login" target="_blank_" className="button">Application </button>  <br/>
          My repository <button href="https://github.com/BW-Domestic-Violence-Survivors-Tool/backend/tree/Loralie-Flint" target="_blank_" className="button">Github</button>
          </p>
        </div>
        <div className="project">
          <h5 className="projectTitle">My Top 9</h5>
          <div className="picholder">
            <img
              className="gitstats"
              src={Top9}
              alt=" git stats project"
            ></img>
          </div>
          <p className="projectbio">
          My top nine was made to run off of the idea of myspace's top ten friends but to be able to connect through new friends with life catagories rather than the people you know.
          I was one of the two react developers, this project was one week long.
          some of the technologies we used are React, axios, Yup, and Formik.<br />
          Our application  <button href="https://nifty-kepler-8c0c38.netlify.app/" target="_blank_" className="button">Application </button>  <br/>
          Our repository <button href="https://github.com/Build-Week-My-Top-Nine/Front-End" target="_blank_" className="button">Github</button>
          </p>
        </div>
      </div>
    )
}
export default ProjectSection