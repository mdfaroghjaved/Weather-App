const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img')
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

const locationNotFound = document.querySelector('.locationNotFound');

const weatherBody = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "7477d5132aa9fbb23c345365bedffc7f"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return;
    }


    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    // console.log(weather_data);

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "clear.png";
            break;
        case 'Rain':
            weatherImg.src = "rain.png";
            break;
        case 'Mist':
            weatherImg.src = "mist.png";
            break;
        case 'Snow':
            weatherImg.src = "snow.png";
            break;
        
    }

}

searchBtn.addEventListener('click', function () {
        checkWeather(inputBox.value);
    });