import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello,<br/>
          I'm <span className="purple">Piyush choubisa</span>, currently in the <spam className="purple">Third year of my Integrated B.Tech in Computer Science Engineering with Artificial Intelligent, Dobok (udaipur)</spam>. While my academic focus lies in IT, I'm equally passionate about diverse pursuits.
          <br/><br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>My portfolio website showcases the synergy of my technical skills and diverse interests, portraying a comprehensive picture of my journey and aspirations.
</p>
          
<p style={{ color: "magenta" }}>Thought Of My Life</p>
          <p style={{ color: "cyan" }}>
          "Dream is not the thing you see in sleep but is that thing that doesn't let you sleep."{" "}
          </p>
          <footer className="blockquote-footer">         APJ Abdul Kalam.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
