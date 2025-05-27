const chave = "c752b3f0c89ce8ec57a61f6c5547a263";

function buscarClima() {
  const cidade = document.getElementById("cidade").value;
  const resultado = document.getElementById("resultado");

  if (cidade === "") {
    resultado.innerHTML = "<p>Por favor, digite o nome de uma cidade.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;

  fetch(url)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Cidade não encontrada.");
      }
      return resp.json();
    })
    .then(dados => {
      const icon = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
      resultado.innerHTML = `
        <h2>${dados.name}</h2>
        <img src="${icon}" alt="Ícone do clima" />
        <p>${dados.weather[0].description}</p>
        <p>Temperatura: ${dados.main.temp.toFixed(1)}°C</p>
        <p>Umidade: ${dados.main.humidity}%</p>
        <p>Vento: ${dados.wind.speed} km/h</p>
      `;
    })
    .catch(erro => {
      resultado.innerHTML = `<p>${erro.message}</p>`;
    });
}
