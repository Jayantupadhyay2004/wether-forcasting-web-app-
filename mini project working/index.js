const apiKey = "8d8f7e1b85fb4be56503d160e6b9dbb0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const carwash = document.getElementById("wash");
const car=document.getElementById("car")
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const imge=document.getElementById("myimage");
const imge2=document.getElementById("myimage2");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "Â°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      imge.src = "images/clouds.png";
      imge2.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      imge.src = "images/clear.png";
      imge2.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
       imge.src = "images/rain.png";
       imge2.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
       imge.src = "images/drizzle.png";
       imge2.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
       imge.src = "images/mist.png";
       imge2.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    // alert(data.main.humidity);
    // alert(data.main.temp);
    if (data.main.humidity > 50 && data.main.temp < 25) {
      carwash.innerHTML ="<h2>Weather is not suitable for Travelling</h2>";
      car.innerHTML="Weather is not Suitable for Washing your car & vehicle and Cloth";
      // alert(data.main.humidity);
    } else if (data.main.humidity < 45 && data.main.temp < 35) {
      carwash.innerHTML =
        "<h2>Weather is suitable for Travelling</h2>" +
        "<ul><li>You can go Outside With your familes</li><li>Take Your Bike And Go</li></ul>";
      // alert("Byee" + data.main.humidity);
    } else {
      carwash.innerHTML = "<h2>Weather is suitable for Travelling</h2>"+"<ul><li>You can go Outside With your familes</li><li>Take Your Bike And Go</li></ul>";
      car.innerHTML =
        "<h2>Weather is suitable for washing your car & vehicle and Cloth</h2>" +
        "<ul><li>You can Wash your car and bike</li><li>Take Your Bike and wash it hurry</li></ul>";
    }
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// console.log("hello")
