const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000; // Use port 8000 instead of 3000

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('website'));
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Spin up the server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
  res.send(projectData);
});

// Post Route
app.post('/addWeatherData', (req, res) => {
  const data = req.body;
  projectData.temperature = data.temperature;
  projectData.date = data.date;
  projectData.feelings = data.feelings;
  res.send(projectData);
});
