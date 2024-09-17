import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiCss3,
  DiBootstrap,
  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiExpress,
  SiCss3,
  SiC,
  SiCanva,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus color="cyan" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1  color="cyan" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava color="cyan"/>
      </Col>
    </Row>
  );
}

export default Techstack;
