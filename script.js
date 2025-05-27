async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "c752b3f0c89ce8ec57a61f6c5547a263";

  if (!city) {
    alert("Por favor, digite o nome da cidade.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
    );

    if (!response.ok) {
      document.getElementById("weather").innerHTML = "Cidade não encontrada.";
      return;
    }

    const data = await response.json();
    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
      <p><strong>Clima:</strong> ${data.weather[0].description}</p>
      <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
      <p><strong>Vento:</strong> ${data.wind.speed} km/h</p>
    `;
    document.getElementById("weather").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weather").innerHTML = "Erro ao buscar os dados.";
  }
}
