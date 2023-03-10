import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import raviHeadshot from "../Assets/Ravi_Headshot.jpg";


function AboutME() {
    const ptagStyle={
        padding:"20px",
    };
    const imgStyle={
        justifycontent:"center",
    };

    return (
        
        <Container fluid className="Biography" id="Bio">
            <img style={imgStyle} src={raviHeadshot} alt="short description"/>
            <p style={ptagStyle}>I was born in India. I lived there for 5 years and then moved to the PNW when my father remarried to my amazingly strong, independant, and compassionate mother. As a first generation immigrant I tried to soak up all that the Pacific Northwest has to offer. I enjoy camping, skiing, hiking and in general being able to absorb the peace and serenity of nature in our beautiful corner of the world. I am blessed to have been married to my wife Lisa for ten years. I have two step children in college, and my daughter in elementary school, who is the light of my life. My main background is in healthcare, specifically in Optometry. However, I am excited to transition to Web Development, and to share my ability and growth as a developer through this showcase
            </p>
        </Container>
        
            
    )
}

export default AboutME;