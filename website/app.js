// Personal API Key for OpenWeatherMap API
const apiKey = "0cd11a225b51702783f7c80493f2743f";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);

/* Function called by event listener */
function performAction() {
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;

  getWeatherData(baseURL, zipCode, apiKey)
    .then(function (data) {
      // Add data to POST request
      postData("/addWeatherData", { temperature: data.main.temp, date: getCurrentDate(), feelings });
    })
    .then(updateUI)
    .catch(function (error) {
      console.error("Error fetching weather data:", error);
    });
}

/* Function to GET Web API Data */
const getWeatherData = async (url, zip, key) => {
  const response = await fetch(`${url}?zip=${zip}&appid=${key}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error parsing weather data:", error);
  }
};

/* Function to POST data */
const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

/* Function to GET Project Data */
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = `Date: ${allData.date}`;
    document.getElementById("temp").innerHTML = `Temperature: ${allData.temperature}`;
    document.getElementById("content").innerHTML = `Feelings: ${allData.feelings}`;
  } catch (error) {
    console.error("Error updating UI:", error);
  }
};

// Function to get the current date
function getCurrentDate() {
  const today = new Date();
  const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  return date;
}
