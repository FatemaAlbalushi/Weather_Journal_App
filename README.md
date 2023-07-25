# Weather_Journal_App


## Overview
The Weather-Journal App is an asynchronous web application that utilizes a Web API and user data to dynamically update the user interface. The app allows users to input their zip code and feelings, and it displays the current temperature, date, and user's feelings for the most recent entry.

## Instructions
To run the Weather-Journal App, follow these steps:

Install the required dependencies by running the following command in the terminal:


```npm install```
Start the server by running the following command in the terminal:


```node server.js```
Open your web browser and navigate to http://localhost:8000 (assuming the server is running on port 8000).

Enter your zip code and your feelings in the provided input fields.

Click on the "Generate" button to fetch weather data from the OpenWeatherMap API and add the entry to the app.

The most recent entry will be displayed in the "Most Recent Entry" section, showing the date, temperature, and user's feelings.

## Files Included
- server.js: This file contains the backend server code using Express, which handles the GET and POST routes.
- website/app.js: This file contains the frontend JavaScript code that interacts with the DOM and performs API calls.
- index.html: The main HTML file that provides the structure of the Weather-Journal App.
- style.css: The CSS file that styles the app's user interface.
- tests.js: This file provides a template for writing and running basic tests for the app.
## Dependencies
The Weather-Journal App requires the following dependencies:

- express: A web framework for Node.js used to create the server.
- body-parser: A middleware to parse incoming request bodies.
- cors: A middleware that enables cross-origin resource sharing.
To install these dependencies, run ``` npm install``` in the project directory.

## Extras
For testing purposes, you can use tests.js as a template to write and run basic tests for your code.

Enjoy using the Weather-Journal App and stay up-to-date with the weather!
