import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PinkClouds from "../Assets/pink-clouds.jpg" 


function ProjectCards(props) {

    return (
        <Card className="ProjectCardTemplate">
            
            <Card.Body style={{background:`url(${PinkClouds})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", padding:"25px"}} variant="top">
                {/* <Card.Img variant="bottom" src={props.imgPath} alt="short description"/> */}
                <Card.Title style={{size:"40px"}} variant="top">{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify", padding:"5px"}}>{props.description}</Card.Text>
                <Button variant="primary" href={props.GitHubLink} target="_blank"></Button>
                <Button variant="primary" href={props.DeployedLink} target="_blank"></Button>
            </Card.Body>
        </Card>
    )

}

export default ProjectCards;