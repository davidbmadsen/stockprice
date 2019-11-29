import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  FlexibleXYPlot,
  LineSeries,
  LineMarkSeries,
  HorizontalGridLines,
  Hint
} from 'react-vis';
import Container from 'react-bootstrap/Container';
import styled, { css } from 'styled-components';

// Alphavantage API
const alpha = require('alphavantage')({ key: '5MGDJJF9CY2M60S6' });
// Div style

const Styles = styled.div`
  float: right;
  padding-top: 5%;
  padding-right: 2%;
  bottom: 0;
  right: 0;
  left: 0;
  height: inherit;
  width: inherit;
`;


class StockChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoaded: false,
      priceMax: 0,
      priceMin: 0,
      priceCurrent: 0
    }

  }

  componentDidMount() {

    let polishedData;
    let data = [];
    // Fetch data from Alphavantage and transform
    alpha.data.daily('tsla', 'compact')
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
          isLoaded: true
        })
      });
  }

  render() {

    var { isLoaded, data, priceMax, priceMin, priceCurrent } = this.state;

    if (!isLoaded) {
      return (
        <div>
          <h1 align="center">Loading stock data...</h1>
        </div>
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
          <FlexibleXYPlot
            xType="ordinal">
            <HorizontalGridLines style={{ opacity: 0.1 }} />

            <LineSeries
              data={data}
              color="#55eb7f"
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


export default StockChart;
