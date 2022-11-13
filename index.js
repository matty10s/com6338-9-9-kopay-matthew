// Matthew Kopay
// COM6338 Assignment 9
// Refactor existing JavaScript code using features from ES6
// Your code here
let sectionWeather = document.querySelector('#weather');
let form = document.querySelector('form')
let inputLocation = document.querySelector('input');


form.onsubmit = function(e) {
  e.preventDefault();
  const location = inputLocation.value.trim()
  if (!location) return
  searchWeather(location);
  inputLocation.value = "";    
}

async function searchWeather(location) {
    if (!location.includes(",")) location += ',us'

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a76b32bf5b491e65fd99110fed59d0ba`;
  
        const response = await fetch(url)
        const data = await response.json()
        if(data !== null) {
            showWeather(data)
        }
    } catch(err) {
    }
}

showWeather = (data) => {  
    if(data.cod !== 200){
        sectionWeather.innerHTML = '<h2>Location Not Found</h2>';
    }
    else{
        if(data.cod === 200){
            
        const { coord: {lat, lon}, main: {feels_like, temp}, name, sys: {country}, weather: {[0]: {description, icon}}} = data;
        const dateTime = new Date(data.dt *1000);
        const currentTime = dateTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute:'2-digit'
        })
            

        }
    }    
}