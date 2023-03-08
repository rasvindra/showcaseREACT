import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import logo from "../../public/logo192.png"


function NavigationBar() {
    return (
        <>
        <Navbar.Brand href="#Navigation">NavBar</Navbar.Brand>
         <Nav className = "NavigationBar" id="Navigation">
            <Nav.link href="#Bio">About Me</Nav.link>
            <Nav.link href="#Portfolio">My Projects</Nav.link>
            <Nav.link href="#Resume">My Work History</Nav.link>
            <Nav.link href="#Contact">Ways to Reach Me</Nav.link>
        
        <Navbar fixed="top" />
        </Nav>
        </>
    )

}

export default NavigationBar;