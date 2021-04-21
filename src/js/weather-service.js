//Promise and static method of obtaining the api
export default class WeatherService {
    static getWeather(city) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.API_KEY}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response);
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
}
//Fetch method of obtaining the api call
export default class WeatherService {
    static getWeather(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.API_KEY}`)
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .catch(function (error) {
                return error;
            })

    }
}
//async and await functional javascript
export default class WeatherService {
    static async getWeather(city) {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        } catch (error) {
            return error.message;
        }
    }
}