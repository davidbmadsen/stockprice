import React from 'react';
import { Nav, Card, Accordion, Container } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Styles = styled.div`
    .flex-column {
        background-color: #1a1616;
        position: absolute;
        width: 7vw;
        height: 100vh;
        padding-top: 4%;
    }

    .nav-link {
        color: #bbb;
        
        &:hover {
            color: #55eb7f;
        }
    }

    .container {
        color: #bbb;
        background-color: #222;
    }
`;

export default class Sidebar extends React.Component {

    render() {
        return (
            <Styles>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Accordion>
                        <Accordion.Toggle as={Nav.Link} eventKey="0">
                            <Nav.Link align="center"><h5>Stocks</h5></Nav.Link>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Container>More stocks coming soon!</Container>
                        </Accordion.Collapse>
                    </Accordion>

                    <Accordion>
                        <Accordion.Toggle as={Nav.Link} eventKey="0">
                            <Nav.Link align="center"><h5>Crypto</h5></Nav.Link>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Container>Sorry, the crypto bubble is over...</Container>
                        </Accordion.Collapse>
                    </Accordion>
                </Nav>
            </Styles>
        )
    }
};