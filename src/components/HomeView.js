import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../images/logo.png"

function HomeView(props) {
    return (
        <Container>
            <Row>
                <Col className="center-block text-center" sm={12}>

                <img src={logo} alt="logo"/>

                </Col>
            </Row>
        </Container>
    );
}

export default HomeView;
