function getAndDisplayWeatherInfo(city,unit){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${config.API_KEY}`)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            throw new Error('Something went wrong');
        })
        .then(response=>{
            displayWeather(response,unit);
        })
        .catch(error=>{
            document.querySelector('#search-bar+span').textContent='Please enter a city';
        })
}

function displayWeather(weatherInfo,unit){
    let DOMWeatherInfo=document.createElement('div');
    DOMWeatherInfo.className='weather-info';
    document.querySelector('.weather-info-wrapper').appendChild(DOMWeatherInfo);
    displayMainWeatherInfo(weatherInfo);
    displaySideWeatherInfo(weatherInfo,unit);
}

function displayMainWeatherInfo(weatherInfo){
    let DOMMainWeatherInfo=document.createElement('div');
    DOMMainWeatherInfo.className='main-weather-info center';
    DOMMainWeatherInfo.innerHTML=
    `
    <h1>${weatherInfo.name} current weather</h1>
    <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="weather icon">  
    <h2>${weatherInfo.weather[0].description}</p>
    `
    document.querySelector('.weather-info').appendChild(DOMMainWeatherInfo);
}

function displaySideWeatherInfo(weatherInfo,unit){
    let DOMSideWeatherInfo=document.createElement('div');
    DOMSideWeatherInfo.className='side-weather-info';
    document.querySelector('.weather-info').appendChild(DOMSideWeatherInfo)
    displayTempInfo(weatherInfo,unit);
    displayWindInfo(weatherInfo,unit);
    displayOtherInfo(weatherInfo);
}

function displayTempInfo(weatherInfo,unit){
    let DOMTempInfo=document.createElement('div');
    DOMTempInfo.className='side-weather-info-card';
    let tempUnit=(unit==='imperial')?'°F':'°C';
    DOMTempInfo.innerHTML=
    `
    <p>Today temperature</p>
    <ul>
        <li>Current temperature: ${weatherInfo.main.temp} <span class="unit">${tempUnit}</span></li>
        <li>Max temperature: ${weatherInfo.main.temp_max} <span class="unit">${tempUnit}</span></li>
        <li>Min temperature: ${weatherInfo.main.temp_min} <span class="unit">${tempUnit}</span></li>
    </ul>
    `
    document.querySelector('.side-weather-info').appendChild(DOMTempInfo);
}

function displayWindInfo(weatherInfo,unit){
    let DOMWindInfo=document.createElement('div');
    DOMWindInfo.className='side-weather-info-card';
    let speedUnit=(unit==='imperial')?'miles/hour':'meter/sec';
    DOMWindInfo.innerHTML=
    `
    <p>Wind</p>
    <ul>
        <li>Wind speed: ${weatherInfo.wind.speed} <span class="unit">${speedUnit}</span></li>
        <li>Wind direction: ${weatherInfo.wind.deg} degrees</li>
    </ul>
    `
    document.querySelector('.side-weather-info').appendChild(DOMWindInfo);
}

function displayOtherInfo(weatherInfo){
    let DOMOtherInfo=document.createElement('div');
    DOMOtherInfo.className='side-weather-info-card';
    DOMOtherInfo.innerHTML=
    `
    <p>Other</p>
    <ul>
        <li>Humidity: ${weatherInfo.main.humidity} %</li>
        <li>Pressure: ${weatherInfo.main.pressure} hPa</li>
    </ul>
    `
    document.querySelector('.side-weather-info').appendChild(DOMOtherInfo);
}

document.querySelector('#search-bar').addEventListener('input',()=>{
    document.querySelector('#search-bar+span').textContent='';
})

document.querySelector('#search-btn').addEventListener('click',()=>{
    document.querySelector('.weather-info-wrapper').innerHTML='';
    let city=document.querySelector('#search-bar').value;
    let unit=document.querySelector('input[name="unit"]:checked').value;
    getAndDisplayWeatherInfo(city,unit);
    document.querySelector('#search-bar').value='';
})