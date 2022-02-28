let weather  = {
    apiKey: "dd7e26fbf92d45a8bac212239222702",
    fetchWeather: function (city){
    fetch(
    "http://api.weatherapi.com/v1/current.json?key=dd7e26fbf92d45a8bac212239222702&q="
    + city 
    +"&aqi=no" 
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
    },
    displayWeather: function (data) {

    }
};






