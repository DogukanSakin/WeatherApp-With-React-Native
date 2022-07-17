import React,{FC} from 'react';
import { Text,View,Image,TouchableOpacity} from 'react-native';
import iconParser from '../../Utils/iconParser';
import {styles} from './WeatherCard.style';
interface ICardProps{
    darkMode?:boolean;
    city:any;
    onTap: ()=> void;
}
const WeatherCard : FC<ICardProps>=({darkMode=false,city,onTap})=>{
    let icon = iconParser(city.conditionText);
    const cardStyle=styles(darkMode);
    return(
        <TouchableOpacity onPress={onTap}>
            <View style={cardStyle.container}>
                <Image source={icon} style={cardStyle.cardIcon}></Image>
                <Text style={cardStyle.cityText}>{city.cityName}</Text>
                <Text style={cardStyle.degreeText}>{city.temp_c}°C</Text>
            </View>
        </TouchableOpacity>
    )
}
export default WeatherCard;