let weather = {
    apiKey: "60e67aea6535eb0dbfdc2ec4ff04eb18",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Clima en " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humedad: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Viento: " + speed + " km/h";
        document.querySelector(".tarjeta").style.backgroundImage = "url('https://source.unsplash.com/900x600?" + name + "')";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Madrid");
  window.addEventListener('scroll', () => {
    const element = document.querySelector('.texto1');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.texto2');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
  
  window.addEventListener('scroll', () => {
    const element = document.querySelector('.texto3');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
  window.addEventListener('scroll', () => {
    const element = document.querySelector('.seccion');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.tarjeta');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });


  window.addEventListener('scroll', () => {
    const element = document.querySelector('.seccion2');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.avion');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.exclamacion');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.route');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.info');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });

function url() {
    location.href = 'https://9c5qxg2vzv2.typeform.com/to/oR16ALWE';
}


