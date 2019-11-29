import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
        position: absolute;
        width: 100vw;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        
        &:hover {
            color: white;
        }
    }
`;

export default class NavigationBar extends React.Component {

    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand>StockPrices</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="https://www.github.com/davidbmadsen">GitHub</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
     }
};