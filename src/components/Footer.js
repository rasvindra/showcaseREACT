import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai"


function Footer() {

        return (

            <Container fluid className="footer">
                <Row>
                    <Col>
                    <h3>Designed by Ravi Nagi</h3>
                    </Col>
                    <Col>
                    <a
                        href="https://github.com/rasvindra"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub/>
                    </a>

                    
                    </Col>

                <h1>Have a Wonderful Day!</h1>
                </Row>
            </Container>
                
        )    
}

export default Footer;