var somedata = {
  '2019-11-25T00:00:00.000Z': {
    open: '262.7100',
    high: '266.4400',
    low: '262.5200',
    close: '266.3700',
    volume: '19242309'
  },
  '2019-11-22T00:00:00.000Z': {
    open: '262.5900',
    high: '263.1800',
    low: '260.8400',
    close: '261.7800',
    volume: '16331263'
  }
}

let dataPoint = 'close';
let data = [];

for (var date in somedata) {
  for (var index in somedata[date]) {
      if (index == dataPoint) {
        data.push(
          { x: date, y: somedata[date][index]
        });
        console.log(data);
      }
  }
}
