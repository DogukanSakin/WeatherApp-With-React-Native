import React,{useEffect,useState} from 'react';
import { View,TextInput,Text,Image,ActivityIndicator, PermissionsAndroid  } from 'react-native';
import {styles} from './HomePage.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherCard from '../../Components/WeatherCard';
import CityWeatherDetail from '../../Components/City Weather Detail';
import Config from 'react-native-config';
import axios from 'axios';
import CityWeatherDetailCardModal from '../../Components/Modals/City Weather Detail Card Modal';
import iconParser from '../../Utils/iconParser';
import GetLocation from 'react-native-get-location'
import VerifyLocationModal from '../../Components/Modals/Verify Location Modal';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const HomePage=()=>{ 
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
    const navigation = useNavigation<homeScreenProp>();
    const [verifyLocationModalVisible,setVerifyLocationModalVisible]=useState<boolean>(false);
    const [userLocationData,setUserLocationData]=useState<any>(null);
    const [currentUserCityWeatherData,setCurrentUserCityWeatherData]=useState<any>(null);
    const [weatherData,setWeatherData]=useState<any>(null);
    const [darkModeEnabled,setDarkModeEnabled]=useState<boolean>(false);
    const [loading,setLoading]=useState<boolean>();
    const [cityWeatherDetailModalVisible,setCityWeatherDetailModalVisible]=useState<boolean>(false);
    const themeColors=styles(darkModeEnabled);
    const [userLocationWeatherDataIcon,setUserLocationWeatherIcon]=useState<any>();
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
                conditionText:parsedData[0]['current'].condition.text,
                wind:parsedData[0]['current'].wind_kph,
                humidity:parsedData[0]['current'].humidity,
                feelsLike_c:parsedData[0]['current'].feelslike_c,
                visibility: parsedData[0]['current'].vis_km,
                country:parsedData[0]['location'].country,
            };
            if(isFunctionFetchCurrentUserData==false){
                setWeatherData(dataDetail);
            }
            else{
                setCurrentUserCityWeatherData(dataDetail);
                let icon =iconParser(dataDetail.conditionText);
                setUserLocationWeatherIcon(icon);
            }
            
            setLoading(false);     
            } 
            catch (error) {
                setWeatherData(null);
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
    async function handleGetUserLocation(){
        setUserLocationData(null);
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            setUserLocationData(location);
            handleVerifyModalVisible();
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }
    
    async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            handleGetUserLocation();
          } else {
            console.log("Location permission denied")
          }
        } catch (err) {
          console.warn(err)
        }
      }
      function handleVerifyModalVisible() {
        setVerifyLocationModalVisible(!verifyLocationModalVisible);
    }
    
    
    return(
        <View style={themeColors.container} testID='home-page-container'>
            <View style={themeColors.topBarInnerContainer}>
                <Icon name='arrow-left-circle' size={45} color={themeComponentColor} style={themeColors.iconStyle} onPress={()=>navigation.navigate('Welcome')}></Icon>
                <View style={themeColors.inputBoxInnerContainer}>
                    <Icon name='magnify' size={25} color={themeComponentColor} testID='home-page-goback-icon'></Icon>
                    <TextInput testID='home-page-search-textinput' placeholder='Search location' style={themeColors.searchLocationInput} placeholderTextColor={themeComponentColor} onChangeText={(cityName:string)=> handleSearchCity(cityName)}></TextInput>               
                </View>
            </View>
            {userLocationData ? <VerifyLocationModal isVisible={verifyLocationModalVisible} onClose={handleVerifyModalVisible} location={userLocationData}></VerifyLocationModal>:null}
            {loading ? <ActivityIndicator style={themeColors.activityIndicator} size={40} color='#5BA7FB'></ActivityIndicator> : null}
            {weatherData!= null ? <WeatherCard city={weatherData} darkMode={darkModeEnabled} onTap={handleCityWeatherDetailModalVisible}></WeatherCard> : null}
            <View style={{flex:1}}></View>
            {cityWeatherDetailModalVisible ? <CityWeatherDetailCardModal isVisible={cityWeatherDetailModalVisible} onClose={handleCityWeatherDetailModalVisible} city={weatherData}></CityWeatherDetailCardModal> : null}   
            {currentUserCityWeatherData!=null  ? 
            (<View style={themeColors.userLocationContainer}>
                <View style={themeColors.cityInfoContainer}>
                <Image source={userLocationWeatherDataIcon} style={themeColors.cityWeatherIcon}></Image>
                    <Text style={themeColors.cityNameText}>{currentUserCityWeatherData.cityName}</Text>
                    <Text style={themeColors.cityDegreeText}>{currentUserCityWeatherData.temp_c}°C</Text>
                </View>
                <CityWeatherDetail darkMode={darkModeEnabled} city={currentUserCityWeatherData}></CityWeatherDetail>
                 
            </View>)
            :
            (
                <View style={themeColors.userLocationContainer}>
                    <View style={themeColors.addLocationInnerContainer}>
                        <Icon name='plus' style={themeColors.plusIconStyle} size={50} onPress={requestLocationPermission}></Icon>
                        <Text style={themeColors.addLocationText}>Add your location</Text>
                    </View>
                </View>
            )
            
            
            }   
            
            
        </View>
    )
}
export default HomePage;