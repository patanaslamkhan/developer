let input=document.querySelector('.input');
let searchicon=document.querySelector('.search-icon');
let wimg=document.querySelector('.wimg');
let Tc=document.querySelector('.Tc');
let Ttitle=document.querySelector('.Ttitle');
let humiditypersentage=document.querySelector('.humidity-persentage');
let htitle=document.querySelector('.htitle');
let windspeed=document.querySelector('.wind-speed');
let wtitle=document.querySelector('.wtitle');

async function apifunction(cityname){
        let APIkey='eb4a6986c9af25efcdba3856a7e7b9ac';
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
        let response=await fetch(url);
            apilink=await response.json();
        console.log(apilink);

        if (apilink.cod === '404') {  
            wimg.src = 'weather error.webp';
            Tc.innerHTML = '--';
            Ttitle.innerHTML = 'City Not Found';
            humiditypersentage.innerHTML = '--';
            windspeed.innerHTML = '--';
            return;  // Stop execution if city is not found
        }

        Tc.innerHTML=Math.round(apilink.main.temp-273.15);
        Ttitle.innerHTML=apilink.weather[0].description;
        humiditypersentage.innerHTML=`${apilink.main.humidity}%`
        windspeed.innerHTML=`${apilink.wind.speed} Km/H`

        switch(apilink.weather[0].main){
            case 'Clear':
                wimg.src='clear.png';
            break;
            case 'Clouds':
                wimg.src='cloud.png';
            break;
            case 'Mist':
                wimg.src='mist.png';
            break;
            case 'Rain':
                wimg.src='rain.png';
            break;
            case 'Snow':
                wimg.src='snow.png';
            break;
        }      
}

searchicon.addEventListener('click',()=>{
    if(input.value == ''){
        window.alert('plz enter city name');
    }else{
    apifunction(input.value);
    }
})
