async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "4eb3703790b356562054106543b748b2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Feels Like: ${data.main.feels_like}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;

    document.getElementById("weatherResult").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

// Fetch and display user data from JSONPlaceholder
async function fetchUsers() {
  const userDiv = document.getElementById("userResult");
  userDiv.innerHTML = "Loading users...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    const users = await res.json();
    userDiv.innerHTML = `<h2>Users</h2><ul>${users
      .map(
        (u) => `<li><strong>${u.name}</strong> (${u.email})<br/>${u.address.city}, ${u.address.street}</li>`
      )
      .join("")}</ul>`;
  } catch (error) {
    userDiv.innerHTML = `<p style='color:red;'>${error.message}</p>`;
  }
}
