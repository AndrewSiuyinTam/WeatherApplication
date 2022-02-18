// JS file for making API fetch
import './header.js';
import '/Users/andrewtam/weather-app/src/css/api.css';

// const getDataFromForm = () => {
//    const form = document.querySelector('inputValue');
   
// };

const display = async () => {
    const weather_content = document.createElement('div');
    weather_content.id = 'displaySection';
    const test = document.createElement('div');

    weather_content.appendChild(test);

    // Create Location Header
    const location_header = document.createElement('h1');
    location_header.id = 'location_header';
    location_header.textContent = 'City';
    weather_content.appendChild(location_header);

    // Create Description
    const description_header = document.createElement('h2');
    description_header.id = 'description_header';
    description_header.textContent = 'Description';
    weather_content.appendChild(description_header);

     // Create Temperature
     const temperature_header = document.createElement('h2');
     temperature_header.id = 'temperature_header';
     temperature_header.textContent = 'Temperature';
     weather_content.appendChild(temperature_header);

    const vl = document.createElement('div');
    vl.classList.add('vl');
    weather_content.appendChild(vl);

    // Align Items
    const misc_div = document.createElement('div');
    misc_div.id = 'misc_div'
    const humidity = document.createElement('h1');
    humidity.id = 'humidity_tag';
    humidity.textContent = 'Humid';
    misc_div.appendChild(humidity);


    const feels_like = document.createElement('h1');
    feels_like.id = 'feels_like';
    feels_like.textContent = 'feels_like';
    misc_div.appendChild(feels_like);

    const wind_speed = document.createElement('h1');
    wind_speed.id = 'wind_speed';
    wind_speed.textContent = 'wind_speed';
    misc_div.appendChild(wind_speed);




    document.body.appendChild(weather_content);
    document.body.appendChild(misc_div);

    const searchIcon = document.getElementById('searchIcon');
    const searchResult = document.getElementById('inputValue');

    searchIcon.addEventListener('click', async () =>{
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchResult.value + '&APPID=f0906e24b45b23cd6a11e932c2e7ed39',
    {
        mode: 'cors' // Cors is a mechanism that allows restricted resources on a webpage to be requested from another domain outside
    })
    const weather = await response.json();
    // console.log(weather.name);
    let weatherData = [weather.name, weather.weather[0].description,
        weather.main.temp,weather.main.feels_like,weather.wind.speed,
        weather.main.humidity];
    
    // console.log(weatherData[4]);
    console.log(weatherData);

    location_header.textContent = weatherData[0];
    description_header.textContent = weatherData[1];
    // let kelvin_to_farenheight = (weatherData[2] - 273.15) * (9/5) + 32
    temperature_header.textContent = kelvin_to_farenheight(weatherData[2]).toFixed(1) + ' F';
    humidity.textContent = `Humidity: ${weatherData[5]} %`;
    feels_like.textContent = `Feels Like: ${kelvin_to_farenheight(weatherData[3]).toFixed(1)} F`
    wind_speed.textContent = `Wind Speed: ${weatherData[4]} mph`;
    console.log(weatherData);
    return weatherData;
    })
};
const kelvin_to_farenheight = (kelvin) =>{
    let farenheight = (kelvin - 273.15) * (9/5) + 32;
    return farenheight;
}

    
//     searchIcon.addEventListener('click', () => {
//         console.log('test');
//         // console.log(fetchAPI(searchResult.value));
//         location_header.textContent = 'weatherData[0]';
//     })
// };

const getLocation = (location) => {
    return location;
}

// API Call with Async and Await, abstracting the concept of Promises
// const fetchAPI = async (location) => {
    
//     const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=f0906e24b45b23cd6a11e932c2e7ed39',
//     {
//         mode: 'cors' // Cors is a mechanism that allows restricted resources on a webpage to be requested from another domain outside
//     })
//     const weather = await response.json();
//     // console.log(weather.name);
//     let weatherData = [weather.name, weather.weather.description,
//         weather.main.temp,weather.main.feels_like,weather.wind.speed,
//         weather.main.humidity];
    
//     // console.log(weatherData[4]);

    
//     console.log(weatherData);
//     return weatherData;
// };





// -> This is using the traditional promises to make the API Call
// const fetchAPI = () => {
//     const form = document.querySelector('inputValue');
//     fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=f0906e24b45b23cd6a11e932c2e7ed39',
//     {
//         mode: 'cors' // Cors is a mechanism that allows restricted resources on a webpage to be requested from another domain outside
//     })
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(response){
//         console.log(response.name);
//         console.log(response.main.temp);
//     })
// };


export {display};