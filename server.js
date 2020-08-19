const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000; //for Heroku
const host = 'localhost' || '0.0.0.0';  //for Heroku

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + "/client/build"));
}
// GPIO-16 init
fs.writeFileSync("/sys/class/gpio/export", "16");
fs.writeFileSync("/sys/class/gpio/gpio16/direction", "out");

// parse application/json
app.use(bodyParser.json());

app.use("/params", function(request, response){
     
  // send response
  response.send({temperature: 2, status: 'ready'});
});

app.put("/lamps", function(request, response){
   console.log('requestBody: ', request.body)
   
   fs.writeFileSync("/sys/class/gpio/gpio16/value", request.body.lamp1);

  // send response
  response.send('Data is sended');
});

// app.listen(3000);
app.listen(port, host, (req, res) => {
  console.log(`Server is listening on port: ${port}`)
})