// Init storage
const storage = new Storage;

// get weather location
const weatherLocation = storage.getLocation();
// instantiate the weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// instantiate the UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change weather location
document.querySelector('#w-change-btn').addEventListener('click', () => {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;

    // call change location
    weather.changeLocation(city, state);

    // set to local storage
    storage.setLocation(city, state); 

    // get weather with new location and display
    getWeather();

    // close modal
    $('#locModal').modal('hide');
    
    // clear input fields
    // document.querySelector('.form-control').addEventListener('focus', (e) => {
    //     console.log(e.target);
    //     city = '';
    //     state = '';
    // });

});

// get the weather info
function getWeather() {
    weather.getWeather().then(results => {
        console.log(results);
    
        ui.paint(results);
    }).catch(err => console.log(err));
    
}
