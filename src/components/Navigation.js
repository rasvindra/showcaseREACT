import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import logo from "../../public/logo192.png"


function NavigationBar() {
    return (
        <>
        <Navbar.Brand href="#Navigation">NavBar</Navbar.Brand>
         <Nav className = "NavigationBar" id="Navigation">
            <a href="#Bio"> About Me </a>
            <a href="#Portfolio"> My Projects </a>
            <a href="#Resume"> My Work History </a>
            <a href="#Contact"> Ways to Reach Me </a>
        
        <Navbar fixed="top" />
        </Nav>
        </>
    )

}

export default NavigationBar;