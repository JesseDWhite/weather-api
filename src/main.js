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

$(document).ready(function () {
    $('#weatherLocation').click(function () {
        const city = $('#location').val();
        $('#location').val("");
        clearFields();
        let promise = WeatherService.getWeather(city);

        promise.then(function (response) {
            const body = JSON.parse(response);
            $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
            $('.showTemp').text(`The temperature is ${Math.floor(response.main.temp)} degrees Fahrenheit.`);
            $('.showDescription').text(`${Date(response.dt)}`);
            $('.showLat').text(`Lat: ${response.coord.lat}.`);
            $('.showLong').text(`Long: ${response.coord.lon}.`);
            $('.showWindSpeed').text(`Wind Speed: ${response.wind.speed}.`);
            $('.showClouds').text(`Clouds: ${response.clouds.all}%.`);
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error}`);
        });
    });
});