import React from "react";
import "../App.css";
import profilePic from "../img/prtfolio-pic.jpg";

function AboutSection () {

    return(
        <div id="about" className="aboutHolder">
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
            <p className="techstack">HTML, CSS, LESS, Javascript, React, Redux, Node.</p>
          </div>
        </div>
      </div>
    )
}
export default AboutSection