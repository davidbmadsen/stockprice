const alpha = require('alphavantage')({key: '5MGDJJF9CY2M60S6'});

let polishedData;

class StockPrices {
    constructor() {
      this.data = [];
      alpha.data.daily('AAPL', 'compact')
          .then(data => { polishedData = alpha.util.polish(data)['data'] })
          .then(() => { for (var date in polishedData) {
                for (var index in polishedData[date]) {
                   if (index == 'close') {
                      this.data.push( { x: date, y: polishedData[date][index] } )
                   }
                }
             }
          });
    }

}


// [
//   {x: 0, y: 8},
//   {x: 1, y: 5},
//   {x: 2, y: 4},
//   {x: 3, y: 2},
//   {x: 4, y: 1},
//   {x: 5, y: 7},
//   {x: 6, y: 6},
//   {x: 7, y: 3},
//   {x: 8, y: 2},
//   {x: 9, y: 0}];

export default StockPrices;
