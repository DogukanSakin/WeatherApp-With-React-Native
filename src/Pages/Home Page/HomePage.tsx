import React,{useEffect,useState} from 'react';
import { View,TextInput,Text,Image,ActivityIndicator  } from 'react-native';
import {styles} from './HomePage.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherCard from '../../Components/WeatherCard';
import CityWeatherDetail from '../../Components/City Weather Detail';
import CityWeatherDetailCardModal from '../../Components/Modals/City Weather Detail Card Modal';
import iconParser from '../../Utils/iconParser';
import VerifyLocationModal from '../../Components/Modals/Verify Location Modal';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import getLocation from '../../Utils/getLocation';
import getWeatherData from '../../Utils/getWeatherData';
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
        getAllData();
    },[]);
    async function getAllData() {
        let themeData=await getData('@themeLocalData');
        setDarkModeEnabled(themeData);
        let userLocationData=await getData('@userLocationCityName');
        handleSearchCity(userLocationData,true);
    }
    async function getData(key:string) {
        let val:any = await AsyncStorage.getItem(key);     
        return await JSON.parse(val);   
    }
    async function handleSearchCity(cityName:string,isFunctionFetchCurrentUserData:boolean=false){
        if(cityName=="" || cityName==null || cityName==undefined){
            setWeatherData(null);
        }
        else{
            try {
                setLoading(true);
                setWeatherData(null);
                let fetchedLocationWeatherData=await getWeatherData(cityName);
                if(isFunctionFetchCurrentUserData==false){
                    setWeatherData(fetchedLocationWeatherData);
                }
                else if(isFunctionFetchCurrentUserData==true){
                    setCurrentUserCityWeatherData(fetchedLocationWeatherData);
                    let icon =iconParser(fetchedLocationWeatherData.conditionText);
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
    function handleCityWeatherDetailModalVisible(){
        setCityWeatherDetailModalVisible(!cityWeatherDetailModalVisible);
    }
    async function handleGetUserLocation(){
        setUserLocationData(null);
        let userLocationData=await getLocation();
        setUserLocationData(userLocationData);
        handleVerifyModalVisible();  
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
                        <Icon name='plus' style={themeColors.plusIconStyle} size={50} onPress={handleGetUserLocation}></Icon>
                        <Text style={themeColors.addLocationText}>Add your location</Text>
                    </View>
                </View>
            )
            
            
            }   
            
            
        </View>
    )
}
export default HomePage;