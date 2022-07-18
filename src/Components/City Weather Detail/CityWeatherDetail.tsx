import React,{FC} from 'react';
import {  Text,View,Image} from 'react-native';
import {styles} from './CityWeatherDetail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface ICardProps{
    darkMode: boolean;
    city: any;
}
const CityWeatherDetailCard:FC<ICardProps>=({darkMode,city})=>{
    const cardColors = styles(darkMode);
    return(
        <>
        <View style={cardColors.weatherDetailContainer}>
            <Icon name='earth' size={20} color='#5BA7FB' testID='weather-detail-card-earth-icon'></Icon>
            <Text style={cardColors.weatherDetailText} testID='weather-detail-card-country-text'>{city.country}</Text>
        </View>
        <View style={cardColors.weatherDetailContainer}>
            <View style={cardColors.weatherDetailCardContainer}>
                <Icon name='eye' size={20} color='#5BA7FB'></Icon>
                <Text style={cardColors.weatherDetailText} testID='weather-detail-card-visibility-text'>Visibility {city.visibility} KM</Text>
            </View>
            <View style={cardColors.weatherDetailCardContainer}>
                <Icon name='thermometer' size={20} color='#5BA7FB'></Icon>
                <Text style={cardColors.weatherDetailText} testID='weather-detail-card-feels-text'>Feels {city.feelsLike_c}°C</Text>
            </View>
        </View><View style={cardColors.weatherDetailContainer}>
                <View style={cardColors.weatherDetailCardContainer}>
                    <Icon name='waves' size={20} color='#5BA7FB'></Icon>
                    <Text style={cardColors.weatherDetailText} testID='weather-detail-card-humidity-text'>Humidity {city.humidity} KM</Text>
                </View>
                <View style={cardColors.weatherDetailCardContainer}>
                    <Icon name='weather-windy' size={20} color='#5BA7FB'></Icon>
                    <Text style={cardColors.weatherDetailText} testID='weather-detail-card-wind-text'>Wind {city.wind} KM</Text>
                </View>
        </View></>
    )
}
export default CityWeatherDetailCard;
