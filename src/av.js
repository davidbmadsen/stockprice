
const alpha = require('alphavantage')({key: '5MGDJJF9CY2M60S6'});
let polishedData;
let data = [];

alpha.data.daily('AAPL', 'compact')
.then(data => { polishedData = alpha.util.polish(data)['data'] })
.then(() => { for (var date in polishedData) {
      for (var index in polishedData[date]) {
         if (index == 'close') {
            data.push( { x: date, y: polishedData[date][index] } )
         }
      }}})
      .then(() => { console.log(data) });
