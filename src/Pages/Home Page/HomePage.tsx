import React,{useEffect,useState} from 'react';
import { View,TextInput,FlatList,Text,Image } from 'react-native';
import {styles} from './HomePage.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherCard from '../../Components/WeatherCard';
import CityWeatherDetail from '../../Components/City Weather Detail';
const HomePage=()=>{  
    const [darkModeEnabled,setDarkModeEnabled]=useState<boolean>(false);
    const themeColors=styles(darkModeEnabled);
    let themeComponentColor = darkModeEnabled? 'white': '#161616';
    useEffect(()=>{getThemeData();},[]);
    async function getThemeData(){
        let jsonValue:any = await AsyncStorage.getItem('@themeLocalData')
        jsonValue=jsonValue != null ? JSON.parse(jsonValue) : false;
        setDarkModeEnabled(jsonValue);
    }
    return(
        <View style={themeColors.container}>
            <View style={themeColors.topBarInnerContainer}>
                <Icon name='cog-outline' size={30} color={themeComponentColor} style={themeColors.iconStyle}></Icon>
                <View style={themeColors.inputBoxInnerContainer}>
                    <Icon name='magnify' size={25} color={themeComponentColor}></Icon>
                    <TextInput placeholder='Search location' style={themeColors.searchLocationInput} placeholderTextColor={themeComponentColor}></TextInput> 
                </View>
            </View>
            <FlatList data={null} renderItem={null}></FlatList>
            <View style={themeColors.userLocationContainer}>
                <View style={themeColors.cityInfoContainer}>
                <Image source={require('../../../assets/icons/Sunny.png')} style={themeColors.cityWeatherIcon}></Image>
                    <Text style={themeColors.cityNameText}>San Francisco</Text>
                    <Text style={themeColors.cityDegreeText}>20°</Text>
                </View>  
                <CityWeatherDetail darkMode={darkModeEnabled}></CityWeatherDetail>  
            </View>
            
        </View>
    )
}
export default HomePage;