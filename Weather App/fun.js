const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a03d0d8315msh52872490fefd10ap1f2568jsnaa90896edd6b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

console.log("pop")
// let citySearched = document.getElementById("citySearched");

// console.log(citySearched.value)
// let search = document.getElementById("search")
window.onload=function(){

	//Popular cities

	//1.Delhi
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Delhi", options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// cloud_pct.innerHTML = response.cloud_pct
				// feels_like.innerHTML = response.feels_like
				DelhiHumidity.innerHTML = response.humidity
				// humidity2.innerHTML = response.humidity
				DelhiMaxTemp.innerHTML = response.max_temp
				DelhiMinTemp.innerHTML = response.min_temp
				DelhiSunrise.innerHTML = response.sunrise
				DelhiSunset.innerHTML = response.sunset
				DelhiTemp.innerHTML = response.temp
				DelhiWindDeg.innerHTML = response.wind_degrees
				DelhiWindSpeed.innerHTML = response.wind_speed
				// wind2.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));
	
	//2. Kolkata
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Kolkata", options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// cloud_pct.innerHTML = response.cloud_pct
				// feels_like.innerHTML = response.feels_like
				KolkataHumidity.innerHTML = response.humidity
				// humidity2.innerHTML = response.humidity
				KolkataMaxTemp.innerHTML = response.max_temp
				KolkataMinTemp.innerHTML = response.min_temp
				KolkataSunrise.innerHTML = response.sunrise
				KolkataSunset.innerHTML = response.sunset
				KolkataTemp.innerHTML = response.temp
				KolkataWindDeg.innerHTML = response.wind_degrees
				KolkataWindSpeed.innerHTML = response.wind_speed
				// wind2.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));
	
	
	//3. Dharwad
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Dharwad", options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// cloud_pct.innerHTML = response.cloud_pct
				// feels_like.innerHTML = response.feels_like
				DharwadHumidity.innerHTML = response.humidity
				// humidity2.innerHTML = response.humidity
				DharwadMaxTemp.innerHTML = response.max_temp
				DharwadMinTemp.innerHTML = response.min_temp
				DharwadSunrise.innerHTML = response.sunrise
				DharwadSunset.innerHTML = response.sunset
				DharwadTemp.innerHTML = response.temp
				DharwadWindDeg.innerHTML = response.wind_degrees
				DharwadWindSpeed.innerHTML = response.wind_speed
				// wind2.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));

	
	//4. Hubli
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Hubli", options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// cloud_pct.innerHTML = response.cloud_pct
				// feels_like.innerHTML = response.feels_like
				HubliHumidity.innerHTML = response.humidity
				// humidity2.innerHTML = response.humidity
				HubliMaxTemp.innerHTML = response.max_temp
				HubliMinTemp.innerHTML = response.min_temp
				HubliSunrise.innerHTML = response.sunrise
				HubliSunset.innerHTML = response.sunset
				HubliTemp.innerHTML = response.temp
				HubliWindDeg.innerHTML = response.wind_degrees
				HubliWindSpeed.innerHTML = response.wind_speed
				// wind2.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));


	
	//5. Bengaluru
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Bengaluru", options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// cloud_pct.innerHTML = response.cloud_pct
				// feels_like.innerHTML = response.feels_like
				BengaluruHumidity.innerHTML = response.humidity
				// humidity2.innerHTML = response.humidity
				BengaluruMaxTemp.innerHTML = response.max_temp
				BengaluruMinTemp.innerHTML = response.min_temp
				BengaluruSunrise.innerHTML = response.sunrise
				BengaluruSunset.innerHTML = response.sunset
				BengaluruTemp.innerHTML = response.temp
				BengaluruWindDeg.innerHTML = response.wind_degrees
				BengaluruWindSpeed.innerHTML = response.wind_speed
				// wind2.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));


	
	//Update the weather for searched city
	document.getElementById("submitClicked").addEventListener('click',(e)=>{
		e.preventDefault();
		console.log("Praveen");
		// console.log(e.target.value)
		getWeather(citySearched.value);
	})

	const getWeather = (citySearched)=>{
		cityName.innerHTML = citySearched;
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + citySearched, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// cloud_pct.innerHTML = response.cloud_pct
				// feels_like.innerHTML = response.feels_like
				humidity.innerHTML = response.humidity
				humidity2.innerHTML = response.humidity
				max_temp.innerHTML = response.max_temp
				min_temp.innerHTML = response.min_temp
				sunrise.innerHTML = response.sunrise
				sunset.innerHTML = response.sunset
				temp.innerHTML = response.temp
				wind_degrees.innerHTML = response.wind_degrees
				wind_speed.innerHTML = response.wind_speed
				wind2.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));
	}
	
	getWeather("Delhi");


  }



// submitClicked.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log("Praveen");
// 	console.log(e.target.value)
// 	getWeather(citySearched.value);
// })





