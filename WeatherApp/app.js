window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-descripton');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature-section');
    let temperatureSpan = document.querySelector('.temperature-section span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${[proxy]}https://api.darksky.net/forecast/ef2d32e866c19ff8e4af5e552b5e5f03/${lat},${long}`;
            fetch(api)
                .then(data => {
                    return data.json();
                })
                .then(data => {
                    console.log(data);
                    const {
                        temperature,
                        icon
                    } = data.currently;

                    //Initiate DOM elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = data.currently.summary;
                    locationTimeZone.textContent = data.timezone;

                    //Celsius/Faren conversion
                    let celsius = (temperature - 32) * (5 / 9);

                    //Initiate Icons
                    setIcons(icon, document.querySelector(".icon"));

                    //Change between faren/celc
                    temperatureSection.addEventListener("click", () => {
                        if (temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });
                });
        });

    } else {
        h1.textContent = "Please enable location"
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({
            color: "white"
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});