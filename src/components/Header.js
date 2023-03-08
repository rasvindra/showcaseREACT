import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./Navigation"


function Header() {
    return (
        <Container fluid className="Nav" id="Navigation">
            <NavigationBar/>
        </Container>
            
    )
}

export default Header;