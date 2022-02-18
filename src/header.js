import '/Users/andrewtam/weather-app/src/css/header.css';
import Background from './imgs/background.jpeg';
import Logo from './imgs/weatherlogo-removebg-preview.png';
import SearchIcon from './imgs/search-removebg-preview (1).png';

// Render Header
const renderHeader = () =>{
    const content = document.getElementById('content');
    const header_div = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = Logo;
    logo.id = 'logo'; 
    content.appendChild(logo);

    const searchBar = document.createElement('input');
    searchBar.type = "text";
    searchBar.placeholder = 'Search..';
    searchBar.id = 'inputValue';
    searchBar.value = '';

    const searchButton = document.createElement('button');
    searchButton.id = 'ok';
    
    const searchIcon = document.createElement('img');
    searchIcon.src = SearchIcon;
    searchButton.appendChild(searchIcon);
    searchIcon.id = 'searchIcon';
    

    const background_img = document.createElement('img');
    background_img.src = Background;

    document.body.style.background = 'black';

    // Append to header div
    header_div.appendChild(searchBar);
    header_div.appendChild(searchIcon);

    

    content.appendChild(header_div);
    
    document.body.appendChild(content);

};


export {renderHeader};