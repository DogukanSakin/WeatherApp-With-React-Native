import React,{useEffect,useState,FC} from 'react';
import { View,TextInput,Text,Image,ActivityIndicator  } from 'react-native';
import {styles} from './HomePage.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherCard from '../../Components/WeatherCard';
import CityWeatherDetail from '../../Components/City Weather Detail';
import Config from 'react-native-config';
import axios from 'axios';
import CityWeatherDetailCardModal from '../../Components/Modals/City Weather Detail Card Modal';
import iconParser from '../../Utils/iconParser';


const HomePage=()=>{  
    const [currentUserCityWeatherData,setCurrentUserCityWeatherData]=useState<any>(null);
    const [weatherData,setWeatherData]=useState<any>(null);
    const [darkModeEnabled,setDarkModeEnabled]=useState<boolean>(false);
    const [loading,setLoading]=useState<boolean>();
    const [cityWeatherDetailModalVisible,setCityWeatherDetailModalVisible]=useState<boolean>(false);
    const themeColors=styles(darkModeEnabled);
    let themeComponentColor = darkModeEnabled? 'white': '#161616';  
    useEffect(()=>{
        getThemeData();
        getUserCurrentLocationCityWeatherData();
    },[]);
    async function handleSearchCity(cityName:string,isFunctionFetchCurrentUserData=false){
        if(cityName=="" || cityName==null || cityName==undefined){
            setWeatherData(null);
        }
        else{
            try {
                setLoading(true);
                setWeatherData(null);
                const data:any = await axios.get(Config.SEARCH_CITY_API_URL+cityName);
                const parsedData= Object.keys(data)
                .map(function(key) {
                return data[key];
            });
            const dataDetail:any={
                cityName:parsedData[0]['location'].name,
                temp_c:parsedData[0]['current'].temp_c,
                temp_f:parsedData[0]['current'].temp_f,
                conditionText:parsedData[0]['current'].condition.text,
                wind:parsedData[0]['current'].wind_kph,
                humidity:parsedData[0]['current'].humidity,
                feelsLike_c:parsedData[0]['current'].feelslike_c,
                feelsLike_f:parsedData[0]['current'].feelslike_f,
                visibility: parsedData[0]['current'].vis_km,
                country:parsedData[0]['location'].country,
            };
            if(isFunctionFetchCurrentUserData==false){
                setWeatherData(dataDetail);
            }
            else{
                setCurrentUserCityWeatherData(dataDetail);
            }
            
            setLoading(false);     
            } 
            catch (error) {
                setWeatherData(null);
                console.log(error);
                setLoading(false);
                
            }
           
        }
    }
    async function getUserCurrentLocationCityWeatherData(){
        let jsonValue:any = await AsyncStorage.getItem('@userLocationCityName')
        jsonValue=jsonValue != null ? JSON.parse(jsonValue) : null;
        handleSearchCity(jsonValue,true);
    }
    async function getThemeData(){
        let jsonValue:any = await AsyncStorage.getItem('@themeLocalData')
        jsonValue=jsonValue != null ? JSON.parse(jsonValue) : false;
        setDarkModeEnabled(jsonValue);
    }
    function handleCityWeatherDetailModalVisible(){
        setCityWeatherDetailModalVisible(!cityWeatherDetailModalVisible);
    }
    let icon=iconParser(currentUserCityWeatherData.conditionText);
    return(
        <View style={themeColors.container}>
            <View style={themeColors.topBarInnerContainer}>
                <Icon name='cog-outline' size={30} color={themeComponentColor} style={themeColors.iconStyle}></Icon>
                <View style={themeColors.inputBoxInnerContainer}>
                    <Icon name='magnify' size={25} color={themeComponentColor}></Icon>
                    <TextInput placeholder='Search location' style={themeColors.searchLocationInput} placeholderTextColor={themeComponentColor} onChangeText={(cityName:string)=> handleSearchCity(cityName)}></TextInput>               
                </View>
            </View>
            
            {loading ? <ActivityIndicator style={themeColors.activityIndicator} size={40} color='#5BA7FB'></ActivityIndicator> : null}
            {weatherData!= null ? <WeatherCard city={weatherData} darkMode={darkModeEnabled} onTap={handleCityWeatherDetailModalVisible}></WeatherCard> : null}
            <View style={{flex:1}}></View>
            {cityWeatherDetailModalVisible ? <CityWeatherDetailCardModal isVisible={cityWeatherDetailModalVisible} onClose={handleCityWeatherDetailModalVisible} city={weatherData}></CityWeatherDetailCardModal> : null}      
            <View style={themeColors.userLocationContainer}>
                <View style={themeColors.cityInfoContainer}>
                <Image source={icon} style={themeColors.cityWeatherIcon}></Image>
                    <Text style={themeColors.cityNameText}>{currentUserCityWeatherData.cityName}</Text>
                    <Text style={themeColors.cityDegreeText}>{currentUserCityWeatherData.temp_c}°C</Text>
                </View>
                <CityWeatherDetail darkMode={darkModeEnabled} city={currentUserCityWeatherData}></CityWeatherDetail>
                 
            </View>
            
        </View>
    )
}
export default HomePage;