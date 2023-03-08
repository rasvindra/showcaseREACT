import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import logo from "../../public/logo192.png"


function NavBar() {
    return (
        <>
        <Navbar.Brand href="#Navigation">NavBar</Navbar.Brand>
         <Nav className = "NavigationBar" id="Navigation">
            <Nav.link href="#bio">About Me</Nav.link>
            <Nav.link href="#Portfolio">My Projects</Nav.link>
            <Nav.link href="#Resume">My Work History</Nav.link>
            <Nav.link href="#Contact">Ways to Reach Me</Nav.link>
        
        <Navbar fixed="top" />
        </Nav>
        </>
    )

}

export default NavBar;