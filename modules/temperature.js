//get temperature from DS18b20 sensor
const fs = require("fs");
const PATH = '/sys/bus/w1/devices/';

exports.getTemperature = (sensorId) => {
  let temperature = fs.readFileSync(PATH + sensorId + '/w1_slave', 'utf8');
  let isT = /YES/.test(temperature);
  if(isT) {
	temperature =  Number(temperature.split('\n')[1].split(' ')[9].slice(2)) / 1000;	
	temperature = Number(Math.round(temperature + 'e'+ 1) + 'e-'+ 1);
	console.log(isT);	
	console.log(`temperature: ${temperature} C`);	
  } else {
	  	console.log('get temperature error');
  	}
  return temperature; 
}
