let search = document.querySelector('#search');
let city = document.querySelector('.city');
let country = document.querySelector('.country');
let time = document.querySelector('.time');
let temperatureValue = document.querySelector('.temperature__value');
let shortDesc = document.querySelector('.short-desc');
let visibility = document.querySelector('.eyes p');
let wind = document.querySelector('.wind p');
let cloudSun = document.querySelector('.cloud-sun p');
let content = document.querySelector('.content');
let body = document.querySelector('body');

async function changeWeatherUI(capitalSearch) {
    let apiURL = 
    `http://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=b35cf1c6352556c00f12f6e58dae5f63`;
    let data = await fetch(apiURL).then(res => res.json());
    console.log(data)
    
    // Display UI
    if (data.cod == 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + ' (m)';
        wind.innerText = data.wind.speed + ' (m/s)';
        cloudSun.innerText = data.main.humidity + ' %';
        temperatureValue.innerText = Math.round(data.main.temp - 273.15); // Convert deg K to deg C
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString('vi');
        content.style.visibility = 'visible';

        // Distinguish the corresponding temperature for each season
        if (temperatureValue.innerText >= 20 && temperatureValue.innerText <= 25) {
            body.setAttribute('class', 'spring');
        }
        if (temperatureValue.innerText >= 30) {
            body.setAttribute('class', 'summer');
        }
        if (temperatureValue.innerText >= 26 && temperatureValue.innerText < 30) {
            body.setAttribute('class', 'autumn');
        }
        if (temperatureValue.innerText < 20) {
            body.setAttribute('class', 'winter');
        }
        
    } else {
        content.style.visibility = 'hidden';
    }

}

search.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
});

changeWeatherUI('tuy hoa');