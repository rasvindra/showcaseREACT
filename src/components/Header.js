import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./Navigation"
import PurpleClouds from "../Assets/purple-clouds.jpg"


function Header() {
    const headStyle={
        height:"80px",
        backgroundImage: `url(${PurpleClouds})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
    };
    return (
        <Container style={headStyle}>
            <NavigationBar/>
            <h1>Ravindra Nagi</h1>
        </Container>
            
    );
}
 
export default Header;