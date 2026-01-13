const apiKey = 'e7a34f2f13c7a941877df88a4ddc7312';
const city = 'Minsk';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;


  (async function getWeather(){
    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data);
    const currencyNode  = document.getElementById('WeatherInfo')
    currencyNode.textContent = `${data.name} : ${data.main.temp}°C`;
})()