/**
 * Using weather data, it returns the appropriate icon for use in the Image component. 
 * @params {string} weather
 */
export default function(weather:string){
    if(weather=='Clear' || weather=='Sunny'){
        return require(`../../assets/icons/Sunny.png`);
    }
    else if(weather=='Snowy'){
        return require(`../../assets/icons/Snowy.png`);
    }
    else if(weather=='Rainy' || weather=='Light rain' || weather=='Moderate or heavy rain shower'){
        return require(`../../assets/icons/Rainy.png`);
    }
    else if(weather=='Mist' || weather=='Overcast' || weather=='Fog' ){
        return require(`../../assets/icons/Overcast.png`);
    }
    else if(weather=='Partly cloudy'){
        return require(`../../assets/icons/PartlyCloudy.png`);
    }
    else if(weather=='Moderate or heavy rain with thunder'){
        return require(`../../assets/icons/RainThunder.png`);
    }
    else if(weather=='Patchy rain possible'){
        return require(`../../assets/icons/prp.png`);
    }
    else{
        return require(`../../assets/icons/unknown.png`);
    }
}