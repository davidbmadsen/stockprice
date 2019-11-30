import React, { Component } from 'react';
import StockChart from './components/StockCharts';
import NavigationBar from './components/Navigationbar';
import Sidebar from './components/Sidebar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="site-box">
          <Sidebar />
          <StockChart />
          <NavigationBar />
        </div>
      </React.Fragment>
    );
  }
}

//<StockChart />