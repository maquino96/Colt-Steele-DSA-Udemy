const weatherData = [
    {
      high: 90.451,
      low: 75.123,
      location: 'Los Angeles, CA',
    },
    {
      high: 48.432,
      low: 44.123,
      location: 'Portland, OR',
    },
    {
      high: 66.684,
      low: 32.321,
      location: 'New York, NY',
    },
    {
      high: 88.801,
      low: 77.771,
      location: 'Miami, FL',
    },
    {
      high: 37.121,
      low: 32.392,
      location: 'Anchorage, AL',
    },
];


function findWarmestLocation(weatherData) {
    return weatherData.sort( (a,b) => { b['high'] - a['high']})[0]['location']
}

function findBiggestTemperatureChangeLocation(weatherData) {
    // your code goes here
    // let range = weatherData.map( element => [element['high'] - element['low'], element['location']])
    // return range.sort( (a,b) => b[0]-a[0])[0][1]
    
    return weatherData.reduce((acc = 0, data) => {
    //     let change = data.high - data.low;
        let formerChange = acc.high - data.low;
        acc = formerChange < change ? change : acc;
        return acc.location;
    })
    
}

function prettyPrintWeatherStatement(weatherData, location) {
    // your code goes here
    for ( let i = 0; i < weatherData.length; i++){
        
        if( weatherData[i]['location'] === location) {
            return `${weatherData[i]['location']} will be expecting a high of ${weatherData[i]['high']}, and a low of ${weatherData[i]['low']}`
        }
    }
}

console.log(findBiggestTemperatureChangeLocation(weatherData));