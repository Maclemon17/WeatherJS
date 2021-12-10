class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.icon = document.querySelector('#w-icon');
        this.details = document.querySelector('#w-details');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feelsLike');
        this.dewPoint = document.querySelector('#w-dewPoint');
        this.wind = document.querySelector('#w-wind');
    }

    paint(weather) {
        this.location.textContent =`${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute("src", ` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.dewPoint.textContent = `Dew Point: ${weather.main.pressure}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}  km/h at ${weather.wind.deg}°` ;
    }
}