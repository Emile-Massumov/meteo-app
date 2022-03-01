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
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon , text } = data;
        const {  humidity } = data.current;
        //console.log(name,icon,text,humidity);
        document.querySelector(".city").innerText = "Météo à" + name;
        document.querySelector(".icon").src ="http://cdn.worldweatheronline.com/images/weather/large/113_night_lg.png";
        document.querySelector(".humidity").innerText = "Humidity" + humidity +"%";
        document.querySelector(".text").innerText = "text";

},
};






