const key = new Apikey;

class Weather {
    constructor(city, state) {
        this.apiKey = '';
        this.city = city;
        this.state = state;
    }

    // Fetch the weather from API async
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&APPID=${this.apiKey}`);
        // http://api.openweathermap.org/data/2.5/weather?q=london,uk&units=metric&appid={YOUR_API_KEY}
        const responseData = await response.json();

        return responseData;
    }

    // Change weather location 
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}