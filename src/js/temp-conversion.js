export default class ShowWeatherConditions {
    constructor(location) {
        this.location = location;
        this.humidity = 0;
        this.currentTemp = 0;
    }

    convertKelvin() {
        let initialTemp = this.currentTemp;
        let convertedTemp = (initialTemp - 273.15) * 9 / 5 + 32;
        return convertedTemp;
    }
}



//0 kelvin is equal to -273.15 fahrenheit.
//conversion formula is ()