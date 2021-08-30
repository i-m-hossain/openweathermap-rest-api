
// loading weather app data and getting the value from input search box
const  loadData = async() =>{
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    // validation if the search field is empty
    if(searchValue ==''){
        const weatherDiv = document.getElementById('weather-display');
        weatherDiv.innerHTML = `<h2>Please provide a city name</h2>`
    }else{
        searchInput.value = ''
        const apiKey =`1b4d1ebe335bc50e13369aec804726b0`;
        const url=`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${apiKey}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            displayWeather(data)
        } catch (error) {
            const weatherDiv = document.getElementById('weather-display');
            weatherDiv.innerHTML = `<h2>City not found</h2>`
        }
    } 
}
// displaying current weather
const displayWeather = (data) =>{
    const weatherDiv = document.getElementById('weather-display');
    weatherDiv.textContent=''
    const div = document.createElement('div');
    div.innerHTML =`
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${data.city.name}</h1>
        <h3><span>${data.list[0].main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.list[0].weather[0].main}</h1>
    `
    weatherDiv.appendChild(div)
}