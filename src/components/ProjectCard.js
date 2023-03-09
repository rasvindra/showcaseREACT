import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function ProjectCards(props) {
    return (
        <Card className="ProjectCardTemplate">
            
            <Card.Body variant="top">
                <Card.Img variant="bottom" src={props.imgPath} alt="short description"/>
                <Card.Title variant="top">{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>{props.description}</Card.Text>
                <Button variant="primary" href={props.GitHubLink} target="_blank"></Button>
                <Button variant="secondary" href={props.DeployedLink} target="_blank"></Button>
            </Card.Body>
        </Card>
    )

}

export default ProjectCards;