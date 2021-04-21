import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './js/weather-service.js'

function clearFields() {
    $('#location').val("");
    $('.showErrors').text("");
    $('.showHumidity').text("");
    $('.showTemp').text("");
    $('.showDescription').text("");
    $('.showLat').text("");
    $('.showLong').text("");
    $('.showWindSpeed').text("");
    $('.showClouds').text("");
}
//code for fetch() method
function getElements(response) {
    if (response.main) {
        $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    } else {
        $('.showErrors').text(`There was an error: ${response.message}`);
    }
}
//async and await functional javascript
function getElements(response) {
    if (response.main) {
        $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    } else {
        $('.showErrors').text(`There was an error: ${response}`);
    }
}
async function makeApiCall(city) {
    const response = await WeatherService.getWeather(city);
    getElements(response);
}

async function makeApiCall(city) {
    const response = await WeatherService.getWeather(city);
    getElements(response);
}


$(document).ready(function () {
    $('#weatherLocation').click(function () {
        const city = $('#location').val();
        $('#location').val("");
        clearFields();
        //async and await functional javascript
        makeApiCall(city);
        //async and await functional javascript

        //code for fetch method
        WeatherService.getWeather(city)
            .then(function (response) {
                getElements(response);
            })
        //code for fetch method
        let promise = WeatherService.getWeather(city);

        promise.then(function (response) {
            const body = JSON.parse(response);
            $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
            $('.showTemp').text(`The temperature is ${Math.floor(body.main.temp)} degrees Fahrenheit.`);
            $('.showDescription').text(`${Date(body.dt)}`);
            $('.showLat').text(`Lat: ${body.coord.lat}.`);
            $('.showLong').text(`Long: ${body.coord.lon}.`);
            $('.showWindSpeed').text(`Wind Speed: ${body.wind.speed}.`);
            $('.showClouds').text(`Clouds: ${body.clouds.all}%.`);
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error}`);
        });
    });
});