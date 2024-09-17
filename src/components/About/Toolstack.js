import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiRender,
  SiJupyter,
  SiPhpmyadmin,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel color="cyan"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
