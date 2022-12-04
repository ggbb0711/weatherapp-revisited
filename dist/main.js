/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("function getAndDisplayWeatherInfo(city,unit){\n        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${config.API_KEY}`)\n        .then(response=>{\n            if(response.ok){\n                return response.json()\n            }\n            throw new Error('Something went wrong');\n        })\n        .then(response=>{\n            displayWeather(response,unit);\n        })\n        .catch(error=>{\n            document.querySelector('#search-bar+span').textContent='Please enter a city';\n        })\n}\n\nfunction displayWeather(weatherInfo,unit){\n    let DOMWeatherInfo=document.createElement('div');\n    DOMWeatherInfo.className='weather-info';\n    document.querySelector('.weather-info-wrapper').appendChild(DOMWeatherInfo);\n    displayMainWeatherInfo(weatherInfo);\n    displaySideWeatherInfo(weatherInfo,unit);\n}\n\nfunction displayMainWeatherInfo(weatherInfo){\n    let DOMMainWeatherInfo=document.createElement('div');\n    DOMMainWeatherInfo.className='main-weather-info center';\n    DOMMainWeatherInfo.innerHTML=\n    `\n    <h1>${weatherInfo.name} current weather</h1>\n    <img src=\"http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png\" alt=\"weather icon\">  \n    <h2>${weatherInfo.weather[0].description}</p>\n    `\n    document.querySelector('.weather-info').appendChild(DOMMainWeatherInfo);\n}\n\nfunction displaySideWeatherInfo(weatherInfo,unit){\n    let DOMSideWeatherInfo=document.createElement('div');\n    DOMSideWeatherInfo.className='side-weather-info';\n    document.querySelector('.weather-info').appendChild(DOMSideWeatherInfo)\n    displayTempInfo(weatherInfo,unit);\n    displayWindInfo(weatherInfo,unit);\n    displayOtherInfo(weatherInfo);\n}\n\nfunction displayTempInfo(weatherInfo,unit){\n    let DOMTempInfo=document.createElement('div');\n    DOMTempInfo.className='side-weather-info-card';\n    let tempUnit=(unit==='imperial')?'°F':'°C';\n    DOMTempInfo.innerHTML=\n    `\n    <p>Today temperature</p>\n    <ul>\n        <li>Current temperature: ${weatherInfo.main.temp} <span class=\"unit\">${tempUnit}</span></li>\n        <li>Max temperature: ${weatherInfo.main.temp_max} <span class=\"unit\">${tempUnit}</span></li>\n        <li>Min temperature: ${weatherInfo.main.temp_min} <span class=\"unit\">${tempUnit}</span></li>\n    </ul>\n    `\n    document.querySelector('.side-weather-info').appendChild(DOMTempInfo);\n}\n\nfunction displayWindInfo(weatherInfo,unit){\n    let DOMWindInfo=document.createElement('div');\n    DOMWindInfo.className='side-weather-info-card';\n    let speedUnit=(unit==='imperial')?'miles/hour':'meter/sec';\n    DOMWindInfo.innerHTML=\n    `\n    <p>Wind</p>\n    <ul>\n        <li>Wind speed: ${weatherInfo.wind.speed} <span class=\"unit\">${speedUnit}</span></li>\n        <li>Wind direction: ${weatherInfo.wind.deg} degrees</li>\n    </ul>\n    `\n    document.querySelector('.side-weather-info').appendChild(DOMWindInfo);\n}\n\nfunction displayOtherInfo(weatherInfo){\n    let DOMOtherInfo=document.createElement('div');\n    DOMOtherInfo.className='side-weather-info-card';\n    DOMOtherInfo.innerHTML=\n    `\n    <p>Other</p>\n    <ul>\n        <li>Humidity: ${weatherInfo.main.humidity} %</li>\n        <li>Pressure: ${weatherInfo.main.pressure} hPa</li>\n    </ul>\n    `\n    document.querySelector('.side-weather-info').appendChild(DOMOtherInfo);\n}\n\ndocument.querySelector('#search-bar').addEventListener('input',()=>{\n    document.querySelector('#search-bar+span').textContent='';\n})\n\ndocument.querySelector('#search-btn').addEventListener('click',()=>{\n    document.querySelector('.weather-info-wrapper').innerHTML='';\n    let city=document.querySelector('#search-bar').value;\n    let unit=document.querySelector('input[name=\"unit\"]:checked').value;\n    getAndDisplayWeatherInfo(city,unit);\n    document.querySelector('#search-bar').value='';\n})\n\n//# sourceURL=webpack://weatherapp-revisited/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;