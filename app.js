// instantiate the weather class
const weather = new Weather('London', 'uk');

// instaatiate the UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', weather.getWeather());

// get the weather info
weather.getWeather().then(results => {
    console.log(results);

    ui.paint(results);
}).catch(err => console.log(err));
