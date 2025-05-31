const apiKey = "YOUR_API_KEY_HERE"; // Get from https://openweathermap.org/api

document.getElementById("fetchBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("condition").textContent = `Condition: ${data.weather[0].description}`;
  } catch (err) {
    alert("City not found");
  }
});
