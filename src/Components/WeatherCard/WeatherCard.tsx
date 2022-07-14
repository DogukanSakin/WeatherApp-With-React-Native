import React,{FC} from 'react';
import { Text,View,Image } from 'react-native';
import {styles} from './WeatherCard.style';
interface ICardProps{
    darkMode?:boolean,
}
const WeatherCard : FC<ICardProps>=({darkMode=false})=>{
    const cardStyle=styles(darkMode);
    return(
        <View style={cardStyle.container}>
            <Image source={require('../../../assets/icons/Sunny.png')} style={cardStyle.cardIcon}></Image>
            <Text style={cardStyle.cityText}>Los Angeles</Text>
            <Text style={cardStyle.degreeText}>20°</Text>
        </View>
    )
}
export default WeatherCard;