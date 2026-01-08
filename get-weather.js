(async function getWeather(){
    const link = await fetch('fb3c50c0fd9d5eadec97c52118809f7f')
    const info = await response.json()
    const Weather = info['Weather']
    const WeatherNode = document.getElementById('WeatherInfo')
    WeatherNode.textContent = {Weather};
})