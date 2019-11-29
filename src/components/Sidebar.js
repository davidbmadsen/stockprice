import React from 'react';
import { Nav, Navbar, NavbarBrand, Container, Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Styles = styled.div`
    .col-md-4 {
        background-color: #222;
        height: inherit;
        width: 5%;
    }
`;

export default class Sidebar extends React.Component {

    render() {
        return (
            <Styles>
                <Row>
                    <Col md="4">some text</Col>
                </Row>
            </Styles>
        )
    }
};