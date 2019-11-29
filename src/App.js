import React, { Component } from 'react';
import StockChart from './components/StockCharts';
import NavigationBar from './components/Navigationbar';
import Sidebar from './components/Sidebar';
import { Jumbotron } from 'react-bootstrap';
import './App.css';
import { Layout } from './components/Layout';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="site-box">
          <Sidebar />
          <StockChart />
        </div>
      </React.Fragment>
    );
  }
}

//<StockChart />