import React from 'react';
import styles from 'styled-components';
import { Container } from 'react-bootstrap';

const TickerBarStyle = styles.div`
    .tickerbar {
        float: left;
        height: 3vh;
        width: inherit;
        padding-left: 2%;
        color: #f0f0f0;
    }

`;



export default class TickerBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TickerBarStyle>
                <Container className="tickerbar">
                    <h1>TSLA</h1>
                </Container>

            </TickerBarStyle>
        )
    }
};