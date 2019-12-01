import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  FlexibleXYPlot,
  LineSeries,
  LineMarkSeries,
  HorizontalGridLines,
} from 'react-vis';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import upArrow from '../assets/up-arrow.svg';
import downArrow from '../assets/down-arrow.svg'

// Alphavantage API
const alpha = require('alphavantage')({ key: '5MGDJJF9CY2M60S6' });

// Div style
const Styles = styled.div`
  float: right;
  padding-top: 4%;
  padding-right: 2%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 93%;
  width: 92%;
`;

const TickerBarStyle = styled.div`
  .tickerbar {
      padding-bottom: 4%;
      float: left;
      height: 2vh;
      width: inherit;
      padding-left: 2%;
      color: #b0b0b0;
  }

  svg {
    fill: red;
  }

`;

class StockChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoaded: false,
      ticker: ''
    }

  }

  componentDidMount() {
    if (!this.state.isLoaded) {
      let polishedData;
      let data = [];
      let ticker = 'AMZN';
      // Fetch data from Alphavantage and transform
      alpha.data.daily(ticker, 'compact')
        .then(data => { polishedData = alpha.util.polish(data)['data'] })
        .then(() => {
          for (var date in polishedData) {
            for (var index in polishedData[date]) {
              if (index == 'close') {
                data.push({ x: date.substring(0, 10), y: parseFloat(polishedData[date][index]) })
              }
            }
          }
        })
        .then(() => {
          this.setState({
            data: data.reverse(),
            isLoaded: true,
            ticker: ticker
          })
        });
    }
  }

  render() {

    var { isLoaded, data, ticker } = this.state;

    if (!isLoaded) {
      return (
        <Styles>
          <Container>
            <h1 align="center">
              <font color="#c0c0c0">Loading stock data...</font>
            </h1>
          </Container>
        </Styles>
      )
    }
    else {

      var min = Infinity, max = -Infinity;
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].y < min) min = this.state.data[i].y;
        if (this.state.data[i].y > max) max = this.state.data[i].y;
      }

      console.log("The data is loaded as:", data, min, max);
      return (

        <Styles>
          <TickerBar parentData={this.state} />
          <FlexibleXYPlot
            xType="ordinal">
            <HorizontalGridLines style={{ opacity: 0.1 }} />

            <LineSeries
              data={data}
              color="#55eb7f"
              title="TSLA"
              style={
                { strokeWidth: 2 }
              } />

            <LineSeries
              data={[
                { x: data[0].x, y: data[99].y },
                { x: data[99].x, y: data[99].y }
              ]}
              color="#c0c0c0"
              style={
                { strokeWidth: 2 },
                { opacity: 0.2 },
                { strokeLineJoin: "round" },
                { strokeStyle: "dashed" },
                { strokeDasharray: '15, 15' }

              } />
            <LineMarkSeries
              data={[{ x: data[99].x, y: data[99].y }]}
              color="#55eb7f"
            />
          </FlexibleXYPlot>
        </Styles>


      )

    }
  }
}


class TickerBar extends React.Component {

  render() {
    var { data, isLoaded, ticker } = this.props.parentData;
    var changeInPrice, arrow;
    if (isLoaded) {
      var diff = data[99].y - data[98].y;

      if (diff > 0) {
        changeInPrice = "#55eb7f"
        arrow = upArrow;
      }
      else if (diff == 0) {
        changeInPrice = "gray"
      }
      else {
        changeInPrice = "red"
        arrow = downArrow;
      }
    
    

    var percentage = (diff/data[99].y)*100;
      return (
        <TickerBarStyle >
          <Container className="tickerbar">
            <h1>
              {ticker} &#x2758; &#x24;{data[99].y} <font color={changeInPrice}>
                {diff.toFixed(2)} &#x28;{percentage.toFixed(2)}%&#x29;</font> <img src={arrow} height="35" width="35" alt=""/>
            </h1>
          </Container>

        </TickerBarStyle>
      )
    }
    else {
      return (<div></div>)
    }
  }
};

export default StockChart;
