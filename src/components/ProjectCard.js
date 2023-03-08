import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function ProjectCards(props) {
    return (
        <Card className="ProjectCardTemplate">
            <Card.Img variant="top" src={props.imgPath} alt="short description"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>{props.decription}</Card.Text>
                <Button variant="primary" href={props.GitHubLink} target="_blank"></Button>
                <Button variant="primary" href={props.DeployedLink} target="_blank"></Button>
            </Card.Body>
        </Card>
    )

}

export default ProjectCards;