import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import landing from "../../Assets/Projects/landing-page-img.png";
import youtube from "../../Assets/Projects/YOUTUB_SUMERIZER.png";
import placement from "../../Assets/Projects/placement-portal.jpeg";
import tour from "../../Assets/Projects/tour-and travel.png";
import human from "../../Assets/Projects/human-following-robat.jpeg";
import amazon from "../../Assets/Projects/amazon_image.png";
import tribute from "../../Assets/Projects/tribute-page.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Tour And Travel Website"
              description="A MERN stack tour and travel website is a dynamic platform using MongoDB, Express.js, React, and Node.js. It lets users explore, select, and book tours. The website showcases tours with images, descriptions, and prices, while users can search, filter, and book tours, and also leave reviews. Admins manage content and bookings via an admin panel."
              //ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1YO52zusKx4yQ5jwgt1hubirzU354CQFN/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="The React.js Amazon clone is a web app resembling Amazon's shopping experience. It lets users view products, add them to a cart, and go through a checkout process. It's built using React.js and mimics Amazon's UI, but it's for learning and demonstration, not actual e-commerce."
              //ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1YRzi8Vol1os_4pV9Tw7adW4_ZXJNaQVl/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Placement Portal Using Mern Stack"
              description="A Placement Portal using the MERN stack is a website that helps students and companies with job placements. It's made using MongoDB, Express.js, React.js, and Node.js. Students can browse job listings, apply for jobs, and manage their profiles. Companies can post job openings, search student profiles, and manage listings."
              //ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1YOA9sco2mXSwrhnbhoAJpbIYra-UNGK9/view?usp=drivesd"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Landing Page Using React"
              description="A React.js product landing page is a dynamic and engaging web interface designed to showcase a specific product or service. Leveraging the power of React.js, a popular JavaScript library, this landing page provides a seamless and interactive user experience. It combines intuitive user interfaces with real-time updates, allowing businesses to effectively present their product's features, benefits, and value proposition. Through React's component-based structure, developers can create responsive and visually appealing designs while integrating animations, user input forms, and data-driven content. Overall, a React.js product landing page offers a modern, efficient, and captivating platform for businesses to captivate their audience and drive conversions."
             // ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1ZI12D6cGE8xPRj6OVa8T65UgIbv4gycu/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tribute}
              isBlog={false}
              title="Tribute Page"
              description="An HTML and CSS Independence Day tribute page is a web page designed to commemorate and celebrate a country's Independence Day using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). It typically includes elements such as the national flag, historical images, patriotic colors, and relevant text content. HTML is used for structuring the content and defining the page's layout, while CSS is employed for styling elements like fonts, colors, spacing, and positioning. The combination of HTML and CSS allows for the creation of visually appealing and informative web pages that pay homage to the significance of Independence Day."
              //ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1XaN0IkcVW6wA8-A9z05IrJL1-Q9lS3H6/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube Transcript Summerizer"
              description="The YouTube Summarizer is a web app made with MERN Stack (MongoDB, Express.js, React, Node.js) and styled using Tailwind CSS. It lets users input YouTube video links, then uses AI to create short summaries of the video's content, helping users quickly understand the video's key points."
              //ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1YE6gxBITawOF2fWCzTDmmFtPF4L2pCci/view?usp=drive_link"    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={human}
              isBlog={false}
              title="Human Following Robot Using Ardunio"
              description="A Human Following Robot using Arduino Uno is a self-contained robot that uses sensors to detect and follow a human. It's built with an Arduino Uno brain, obstacle-detecting sensors, and motor controls for movement. The robot processes sensor data to adjust its motion and maintain a steady distance from the human. It showcases the fusion of robotics and programming for autonomous tracking."
              //ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1YUv7TqxnfN9DRv6Y8jz59F4MCfYjDwyg/view?usp=drive_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
