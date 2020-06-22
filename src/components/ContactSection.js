import React from "react";
import "../index.css";
import "../App.css";

import ".../../font-awesome/css/font-awesome.min.css";
import styled from "styled-components";

const Gmail = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;
  padding: 10px;
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
    padding: 10px;
  :hover {
    background-color: #1da1f2;
    color: white;
  }
`;
const Linkedin = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;
  padding: 10px;
  :hover {
    background-color: #0072b1;
    color: white;
  }
`;
const Github = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;
  padding: 10px;
  :hover {
    background-color: #0072b1;
    color: black;
  }
`;
const Fcc = styled.a`
  background-color: #656565;
  border-radius: 50%;
  margin: 20px;
  padding: 10px;
  :hover {
    background-color: green;
    color: black;
  }
`;

function ContactSection() {
  return (
    <div id="contact" className="contact">
      <h4 className="contactTitle">Contact Me</h4>
      <div className="icons">
        <Gmail
          className="icon"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=subject_here&body=body_here"
          target="_blank_"
        >
          <i class="fa fa-google fa-2x" aria-hidden="true"></i>
        </Gmail>
        <Twitter
          className="icon"
          href="https://twitter.com/LoralieFlint"
          target="_blank_"
        >
          <i class="fa fa-twitter fa-2x twitter" aria-hidden="true"></i>
        </Twitter>
        <Linkedin
          className="icon"
          href="https://www.linkedin.com/in/loralie-flint/"
          target="_blank_"
        >
          <i
            class="fa fa-linkedin-square fa-2x linkedin"
            aria-hidden="true"
          ></i>
        </Linkedin>
        <Github
          className="icon"
          href="https://github.com/LoralieFlint"
          target="_blank_"
        >
          <i class="fa fa-github fa-2x github" aria-hidden="true"></i>
        </Github>
        <Fcc
          className="icon"
          href="https://www.freecodecamp.org/laflint92"
          target="_blank_"
        >
          <i class="fa fa-free-code-camp fa-2x fcc" aria-hidden="true"></i>
        </Fcc>
      </div>
    </div>
  );
}

export default ContactSection;
