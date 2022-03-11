const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const lib = require("./database/config.js");
const { urlencoded } = require('body-parser');
const LEDConfig = new lib.Config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/', urlencodedParser, function(req, res) {
  var response = req.body;
  // Color
  if (response.color == "red") {
    LEDConfig.makeColorConfig(255, 0, 0);
  }
  else if (response.color == "blue") {
    LEDConfig.makeColorConfig(0, 0, 255);
  }
  else if (response.color == "green") {
    LEDConfig.makeColorConfig(0, 255, 0);
  }
  else if (response.color == "purple") {
    LEDConfig.makeColorConfig(128, 0, 128);
  }
  else if (response.color == "pink") {
    LEDConfig.makeColorConfig(255,192,203);
  }
  else if (response.color == "teal") {
    LEDConfig.makeColorConfig(0,128,128);
  }
  else if (response.color == "rainbow") {
    LEDConfig.makeColorConfig(-1,-1,-1);
  }
  else if (response.color == "off") {
    LEDConfig.makeColorConfig(0,0,0);
  }

  // Mode
  if (response.color == "solid") {
    LEDConfig.makeModeConfig(0);
  }
  else if (response.color == "flashing") {
    LEDConfig.makeModeConfig(1);
  }
  else if (response.color == "strobe") {
    LEDConfig.makeModeConfig(2);
  }
  else if (response.color == "breathing") {
    LEDConfig.makeModeConfig(3);
  }

  res.sendFile(path.join(__dirname, 'views/index.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);
