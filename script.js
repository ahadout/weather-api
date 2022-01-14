let input = document.getElementById("input");
let button = document.getElementById("btn");
let weather = document.getElementById("weather");
let Location = document.getElementById("location");

button.addEventListener('click', function(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=31e763d3ee8144f5b86114810220501&q=${input.value}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            //weather infos
            let temp_c = data['current']['temp_c'];
            let temp_f = data['current']['temp_f'];
            let wind = data['current']['wind_kph'];
            let humidity = data['current']['humidity'];
            let condition = data['current']['condition']['text'];
            let icon = data['current']['condition']['icon'];

            //location infos
            let country = data['location']['country'];
            let city = data['location']['name'];
            let localTime = data['location']['localtime'];
            let timeZone = data['location']['tz_id']
            if(data['location']['region'] != ""){
                var region = data['location']['region'];
            }
            else{
                var region = "X";
            }

            //display weather inofs
            weather.innerHTML = `
                                <div class="d-flex">
                                    <img src="${icon}" width="50px" height="50px">
                                    <p class="offset-md-1">${condition}</p>
                                </div>
                                <div class="d-flex">
                                    <img src="celsius_icon.png" width="50px" height="50px">
                                    <p class="offset-md-1">${temp_c}°</p>
                                </div>
                                <div class="d-flex">
                                    <img src="fahrenheit_icon.png" width="50px" height="50px">
                                    <p class="offset-md-1">${temp_f}°</p>
                                </div>
                                <div class="d-flex">
                                    <img src="wind.png" width="50px" height="50px">
                                    <p class="offset-md-1">${wind}</p>
                                </div>
                                <div class="d-flex">
                                    <img src="humidity.png" width="50px" height="50px">
                                    <p class="offset-md-1">${humidity}</p>
                                </div>
                                    `;

            //display location infos
            Location.innerHTML = `
                                <p class="text-white">Country : ${country}</p>
                                <p class="text-white">city : ${city}</p>
                                <p class="text-white">region : ${region}</p>
                                <p class="text-white">time Zone ID : ${timeZone}</p>
                                <p class="text-white">localTime : ${localTime}</p>
                                    `;
            console.log(data);
        })
        .catch(err => alert("Enter a valid City Name"))
    
    // //api key: 03d630fa1a63597a680d41844f04ef73 api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}
    // fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=03d630fa1a63597a680d41844f04ef73`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
});