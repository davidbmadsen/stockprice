import React from 'react';
import { Nav, Card, Accordion, Button, Navbar, NavbarBrand, Container, Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Styles = styled.div`
    .flex-column {
        background-color: #1a1616;
        position: absolute;
        width: 8vw;
        height: 100vh;
        padding-top: 4%;
    }

    .nav-link {
        color: #bbb;
        
        &:hover {
            color: #55eb7f;
        }
    }
`;

export default class Sidebar extends React.Component {

    render() {
        return (
            <Styles>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Accordion>
                            <Accordion.Toggle as={Nav.Link} eventKey="0">
                                <Nav.Link align="center">Stocks</Nav.Link>
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                    </Accordion>

                    <Accordion>
                            <Accordion.Toggle as={Nav.Link} eventKey="0">
                                <Nav.Link align="center">Crypto</Nav.Link>
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                    </Accordion>
                </Nav>
            </Styles>
        )
    }
};