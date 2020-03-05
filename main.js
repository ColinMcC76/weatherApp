var api = "https://api.openweathermap.org/data/2.5/weather?zip=";
var apiKey = ",us&appid=f6e794a744605634525ea7abdecf8830&units=imperial";
var tempFahr = document.getElementById("fahrenheit");
var tempKel = document.getElementById("kelvin");
var tempCelc = document.getElementById("celcius");
var townName = document.getElementById("cityName");
var cond = document.getElementById("condition");
var seasonDisplay = document.getElementById("seasonDisplay");
var appBtn = document.getElementById("appBtn");
var err = document.getElementById("error");
// var tempFahr = document.getElementById("fahrenheit")

function setup() {
    var zip = document.getElementById("input");
    weather(zip);
}

function weather(zip) {
    fetch(api + zip.value + apiKey)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            var data1 = data;
            // console.log(data1.main.temp)
            // console.log(data1)
            // console.log(data1.weather[0].icon);
            var url = ("https://openweathermap.org/img/wn/" + data1.weather[0].icon + "@2x.png");
            // console.log(url)
            tempFahr.innerText = Math.ceil(data1.main.temp);
            tempCelc.innerText = Math.ceil((data1.main.temp - 32) * 5 / 9);
            tempKel.innerText = Math.ceil((data1.main.temp - 32) * 5 / 9 + 273.15);
            townName.innerText = data1.name;
            cond.innerText = data1.weather[0].description;
            seasonDisplay.src = (url);
            err.innerText = "";
        })
        .catch((error) => {
            console.log("Error:", error);
            err.innerText = "Error: " + zip.value + " didn't work. Maybe make sure thats a valid zipcode!";
            tempFahr.innerText = "";
            tempCelc.innerText = "";
            tempKel.innerText = "";
            townName.innerText = '';
            cond.innerText = ""
            seasonDisplay.src = "";

        })
        // var data = weather.JSON();
}
// console.log(tempFahr)
// console.log(data.weather.main)