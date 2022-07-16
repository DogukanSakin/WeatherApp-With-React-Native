import React,{FC} from 'react';
import { Text,View,Image } from 'react-native';
import {styles} from './WeatherCard.style';
interface ICardProps{
    darkMode?:boolean,
    city:any,
}
const WeatherCard : FC<ICardProps>=({darkMode=false,city})=>{
    let iconName;
    if(city.conditionText=='Clear' || city.conditionText=='Sunny'){
        iconName=require(`../../../assets/icons/Sunny.png`);
    }
    else if(city.conditionText=='Snowy'){
        iconName=require(`../../../assets/icons/Snowy.png`);
    }
    else if(city.conditionText=='Rainy' || city.conditionText=='Light rain'){
        iconName=require(`../../../assets/icons/Rainy.png`);
    }
    else if(city.conditionText=='Mist' || city.conditionText=='Overcast'){
        iconName=require(`../../../assets/icons/Overcast.png`);
    }
    else if(city.conditionText=='Partly cloudy'){
        iconName=require(`../../../assets/icons/PartlyCloudy.png`);
    }
    else if(city.conditionText=='Rain thunder'){
        iconName=require(`../../../assets/icons/RainThunder.png`);
    }
    else if(city.conditionText=='Patchy rain possible'){
        iconName=require(`../../../assets/icons/prp.png`);
    }
    else{
        iconName=require(`../../../assets/icons/unknown.png`);
    }
  
    
    
    const cardStyle=styles(darkMode);
    return(
        <View style={cardStyle.container}>
            <Image source={iconName} style={cardStyle.cardIcon}></Image>
            <Text style={cardStyle.cityText}>{city.cityName}</Text>
            <Text style={cardStyle.degreeText}>{city.temp_c}°C</Text>
        </View>
    )
}
export default WeatherCard;