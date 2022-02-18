// import the FetchAPI class you created
import { fetchAPI } from "./api";
import '/Users/andrewtam/weather-app/src/css/weather_display.css';
import { renderHeader } from "./header";



// Create Display for main display area
// We want Location, Description, Temperature, Feels Like, Wind, and Humidity
// Create an option to toggle between Farenheight and Celcius

// const display = () => {
//     const weather_content = document.createElement('div');
//     weather_content.id = 'displaySection';
//     const test = document.createElement('div');

//     weather_content.appendChild(test);

//     // Create Location Header
//     const location_header = document.createElement('h1');
//     location_header.id = 'location_header';
//     location_header.textContent = 'City';
//     weather_content.appendChild(location_header);



//     document.body.appendChild(weather_content);

//     const searchIcon = document.getElementById('searchIcon');
//     const searchResult = document.getElementById('inputValue');

    
//     searchIcon.addEventListener('click', () => {
//         console.log('test');
//         // console.log(fetchAPI(searchResult.value));
//         location_header.textContent = 'weatherData[0]';
//     })
// };


// export {display};
