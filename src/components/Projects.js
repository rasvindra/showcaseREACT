import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./projectCard";
import PinkClouds from "../../public/Assets/pink-clouds.jpg"
// Need to create paths to images for each project


function Projects() {
    return(
        <Container fluid className="project-area">
            <Container>
                <h1> Here is a list of some of my Projects and Collaberations</h1>
                <Row style={{justifyContent:"center"}}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={PinkClouds}
                        title="newDND"
                        desription="A Heroku deployed application that utilizes DataBase management and Javascript functionality along with NPM packages to create a Dungeon Crawler style game"
                        GitHUbLink="https://github.com/rasvindra/newDND"
                        DeployedLInk="https://new-dnd7.herokuapp.com/"
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={PinkClouds}
                        title="US National Park Traveler's Dashboard"
                        desription="Collaborative group project integrating data received from multiple server-side API requests."
                        GitHUbLink="https://mwambaugh.github.io/collaborativeAPIstudy"
                        DeployedLInk="https://mwambaugh.github.io/collaborativeAPIstudy"
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={PinkClouds}
                        title="Chew-on-it"
                        desription="This is a social media application to discover new restaurants personally recommended by friends, family and peers. By utilizing Node.js, Express.js, Handlebars.js, MySQL and Sequelize, this is a dynamic full stack application that accepts and responds to user inputs to create reviews, add comments, and retrieve data and information."
                        GitHUbLink="https://github.com/pem2k/Chew-on-it"
                        DeployedLInk="https://github.com/pem2k/Chew-on-it"
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={PinkClouds}
                        title="Cute and Cuddly"
                        desription="A simple page that links to third party API and provides pictures and a bit of information related to the searchable breed of various cats and dogs for user referance. Individual pages for dog search and cat search. and additioanl page with a game for users to choose which animal they think is cuter"
                        GitHUbLink="https://github.com/GabrielWarner/cute-and-cuddly"
                        DeployedLInk="https://gabrielwarner.github.io/cute-and-cuddly/"
                        />

                    </Col>
                </Row>
            </Container>

        </Container>
    )

}

export default Projects