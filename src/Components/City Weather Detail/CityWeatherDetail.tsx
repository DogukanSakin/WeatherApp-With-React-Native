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
            <Icon name='earth' size={20} color='#5BA7FB'></Icon>
            <Text style={cardColors.weatherDetailText}>{city.country}</Text>
        </View>
        <View style={cardColors.weatherDetailContainer}>
            <View style={cardColors.weatherDetailCardContainer}>
                <Icon name='eye' size={20} color='#5BA7FB'></Icon>
                <Text style={cardColors.weatherDetailText}>Visibility {city.visibility} KM</Text>
            </View>
            <View style={cardColors.weatherDetailCardContainer}>
                <Icon name='thermometer' size={20} color='#5BA7FB'></Icon>
                <Text style={cardColors.weatherDetailText}>Feels {city.feelsLike_c}°C</Text>
            </View>
        </View><View style={cardColors.weatherDetailContainer}>
                <View style={cardColors.weatherDetailCardContainer}>
                    <Icon name='waves' size={20} color='#5BA7FB'></Icon>
                    <Text style={cardColors.weatherDetailText}>Humidity {city.humidity} KM</Text>
                </View>
                <View style={cardColors.weatherDetailCardContainer}>
                    <Icon name='weather-windy' size={20} color='#5BA7FB'></Icon>
                    <Text style={cardColors.weatherDetailText}>Wind {city.wind} KM</Text>
                </View>
        </View></>
    )
}
export default CityWeatherDetailCard;
