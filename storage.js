class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = "London";
        this.defaultState = "fl";
    }

    // get location
    getLocation() {
        // check if empty
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
            console.log(this.city);
        }

        if(localStorage.getItem('state') === null) {
            this.state = this.defaultStte;
        } else {
            this.state = localStorage.getItem('state');
        }

        //  return city and state
        return {
            city: this.city,
            state: this.state
        }
    }

    // set location
    setLocation(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}  