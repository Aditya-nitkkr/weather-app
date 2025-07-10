// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=7449351dc4471dc316e29993c2325021&units=metric


const apiKey = "7449351dc4471dc316e29993c2325021";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const tempInCel = document.querySelector(".tempCel");
const tempInFer = document.querySelector(".tempfer");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");
async function checkWeather(city) {
    let response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
    let data = await response.json();
    if (response.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";

    } 
    else {
        let cel = Math.round(data.main.temp);
        tempInFer.innerHTML = Math.round((9 / 5 * cel) + 32) + "℉";
        tempInCel.innerHTML = cel + "℃";

        let cloudImg=document.querySelector(".cloudImg");
        let weatherCon=data.weather[0].main;
        cloudImg.src=`images/${weatherCon}.png`;
        document.querySelector(".condition").innerHTML=weatherCon;

        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = Math.round(data.wind.speed) + " km/h";
        document.querySelector(".cityName").innerHTML = data.name;
        error.style.display="none";
        weather.style.display="block";

    }

}
const city = document.querySelector(".selectCity");
document.querySelector(".selectbtn").addEventListener("click", () => {
    checkWeather(city.value)
})
