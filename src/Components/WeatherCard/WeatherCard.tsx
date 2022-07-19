/** 
 * This component is the card shown to the user on the home page as a result of the search. 
*/
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
        <TouchableOpacity onPress={onTap} testID='weather-card-touchable'>
            <View style={cardStyle.container} testID='weather-card-container'>
                <Image source={icon} style={cardStyle.cardIcon} testID='weather-card-icon'></Image>
                <Text style={cardStyle.cityText} testID='weather-card-cityText'>{city.cityName}</Text>
                <Text style={cardStyle.degreeText} testID='weather-card-degreeText'>{city.temp_c}°C</Text>
            </View>
        </TouchableOpacity>
    )
}
export default WeatherCard;