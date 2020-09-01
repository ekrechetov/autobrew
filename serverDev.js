const express = require("express");
const app = express();
const server = require('http').createServer(app);
const fs = require("fs");
const gpio = require("./modules/gpio");
const temperature = require("./modules/temperature");
const bodyParser = require('body-parser');
const io = require('socket.io')(server);
const PATH = '/sys/class/gpio/';


const port = process.env.PORT || 5000; //for Heroku
//const host = 'localhost' || '0.0.0.0';  //for Heroku
const host = '0.0.0.0';  //for raspberry

// GPIO init
const OUT = 'out';
const pinLamp1 = 16;
const pinLamp2 = 20;
const pinLamp3 = 21;

//const isPinExported = gpio.checkExport(pinLamp1); //uncomment for production
const isPinExported = true; //remove for production

if(!isPinExported){
  gpio.exportPin(pinLamp1)
    .then(function() {
      gpio.setDirection(pinLamp1, OUT);
    });
    
  gpio.exportPin(pinLamp2)
    .then(function() {
      gpio.setDirection(pinLamp2, OUT);
    });
        
  gpio.exportPin(pinLamp3)
    .then(function() {
      gpio.setDirection(pinLamp3, OUT);
    });
}

//if (process.env.NODE_ENV === 'production') {
//  app.use(express.static(__dirname + "/"));
//}
//app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/client/build"));

// parse application/json
app.use(bodyParser.json());


app.use("/params", function(request, response){
     
  // send response
  response.send({temperature: 2, status: 'ready'});
});


app.put('/lamps/1', function(request, response){
  
  console.log('requestBody: ', request.body.lamp1);
  
  fs.writeFile(`${PATH}gpio${pinLamp1}/value`, `${request.body.lamp1 ? '1' : '0'}`, (e) => {
    if (e) {
        console.log('Ошибка: ', e);
      } else
    console.log(`gpio${pinLamp1} value is ${request.body.lamp1 ? '1' : '0'}`)
    });
response.send(`Lamp 1 is ${request.body.lamp1}`);
});

app.put('/lamps/2', function(request, response){
  
  console.log('requestBody: ', request.body.lamp2);
  
  fs.writeFile(`${PATH}gpio${pinLamp2}/value`, `${request.body.lamp2 ? '1' : '0'}`, (e) => {
    if (e) {
        console.log('Ошибка: ', e);
      } else
    console.log(`gpio${pinLamp2} value is ${request.body.lamp2 ? '1' : '0'}`)
    });
response.send(`Lamp 2 is ${request.body.lamp2}`);
});

app.put('/lamps/3', function(request, response){
  
  console.log('requestBody: ', request.body.lamp3);
  
  fs.writeFile(`${PATH}gpio${pinLamp3}/value`, `${request.body.lamp3 ? '1' : '0'}`, (e) => {
    if (e) {
        console.log('Ошибка: ', e);
      } else
    console.log(`gpio${pinLamp3} value is ${request.body.lamp3 ? '1' : '0'}`)
    });
response.send(`Lamp 3 is ${request.body.lamp3}`);
});


//socket: генерируется событие connection
io.on('connection', (socket) => {
  console.log(`Client with id ${socket.id} connected`);
  
// get temperature and send to client
  let t = 0;
  setInterval(() => {
    //let newT = temperature.getTemperature(); //uncomment!!!!!!!
    let newT = t + 1; // remove!!!!!!!
    if(newT !== t) {
      console.log('t = ', newT);
      socket.emit('changeTemperature', newT)
      t =+ 1 
    }  
  }, 1000);

  //socket.emit('message', "I'm server")
});


//app.listen(port, host, (req, res) => {
server.listen(port, host, (req, res) => {
  console.log(`Server is listening on port: ${port} host: ${host}`)
});
