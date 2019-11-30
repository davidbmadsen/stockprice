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
                    <Nav.Link href="/home" align="center">Stocks</Nav.Link>
                    <Nav.Link eventKey="link-1" align="center">Crypto</Nav.Link>
                    <Nav.Link eventKey="link-2" align="center">Funds</Nav.Link>
                    <Nav.Link eventKey="disabled" align="center">About</Nav.Link>
                </Nav>
            </Styles>
        )
    }
};