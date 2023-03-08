import React, {useState} from "react";
import {Container, Row, Col } from "react-bootstrap";
import {NavBar} from "./Navigation"

// import logo from "../../public/logo192.png"


function Header() {
    return (
        //how do I insert the NavBar?
        <Container fluid className="Nav" id="Navigation">
            <NavBar/>
        </Container>
            
    )
}

export default Header;