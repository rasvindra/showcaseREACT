import React, {useState} from "react";
import {Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./projectCard";
import nameofImage from "../../public/Assets/thisimage.png"
// Need to create paths to images for each project


function Projects() {
    return(
        <Container fluid className="project-area">
            <Container>
                <h1> Here is a list of some of my Projects and Collaberations</h1>
                <Row style={{justifyContent:"center"}}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={nameofImage}
                        title=""
                        desription=""
                        GitHUbLink=""
                        DeployedLInk=""
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={nameofImage}
                        title=""
                        desription=""
                        GitHUbLink=""
                        DeployedLInk=""
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={nameofImage}
                        title=""
                        desription=""
                        GitHUbLink=""
                        DeployedLInk=""
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={nameofImage}
                        title=""
                        desription=""
                        GitHUbLink=""
                        DeployedLInk=""
                        />

                    </Col>
                </Row>
            </Container>

        </Container>
    )

}

export default Projects