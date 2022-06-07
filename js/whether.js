const API_KEY = "acc7905c5c0151e722ad41767bf52adb";

function geoSuccess(event) {
    const lat = event.coords.latitude;
    const lon = event.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherElement = document.querySelector(
                "#weather span:first-child"
            );
            const city = document.querySelector("#weather span:last-child");
            weatherElement.innerText = `${data.weather[0].description}, ${data.main.temp}℃\, `;
            city.innerText = data.name;
        });
}

function geoError() {
    alert("Sorry, We cannot access to your current location.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
