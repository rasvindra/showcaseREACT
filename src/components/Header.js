import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./Navigation"
import PurpleClouds from "../Assets/purple-clouds.jpg"


function Header() {
    const headStyle={
        height:"60px",
        backgroundImage: `url(${PurpleClouds})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
    };
    return (
        <Container style={headStyle}>
            <NavigationBar/>
        </Container>
            
    );
}
 
export default Header;