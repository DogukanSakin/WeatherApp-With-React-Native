import React,{FC,useState,useEffect} from 'react';
import { Text,View,ActivityIndicator } from 'react-native';
import Modal from "react-native-modal";
import {styles} from './VerifyLocationModal.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../Button';
import CityWeatherDetail from '../../City Weather Detail';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Pages/RootStackParamList';

interface IVerifyLocationModalProps{
    isVisible:boolean;
    onClose:()=> void;
    location?:any;
}
const VerifyLocationModal:FC<IVerifyLocationModalProps>=({isVisible,onClose,location})=>{
    type modalScreenProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
    const navigation = useNavigation<modalScreenProp>();
    const [darkModeEnabled,setDarkModeEnabled]=useState<boolean>(false);
    const [userLocationData,setUserLocationdata]=useState<any>(null);
    const [loading,setLoading]=useState<boolean>(false);
    const modalTheme=styles(darkModeEnabled);
    useEffect(()=>{
        getThemeData();
        getUserLocationWeatherData();
    },[]);
    async function handleSaveUserCurrentLocation() {
        await AsyncStorage.setItem('@userLocationCityName', JSON.stringify(userLocationData.cityName))
        navigation.navigate('Home');
    }
    async function getUserLocationWeatherData(){
        if(location!=null){
            try {
                setLoading(true);
                const data:any = await axios.get(Config.SEARCH_CITY_API_URL+location.latitude+","+location.longitude);
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
                setUserLocationdata(dataDetail);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
                setLoading(false);
                
            }
        }
        
        
    }
    async function getThemeData(){
        let jsonValue:any = await AsyncStorage.getItem('@themeLocalData')
        jsonValue=jsonValue != null ? JSON.parse(jsonValue) : false;
        setDarkModeEnabled(jsonValue);
    }
    return(
        <Modal isVisible={isVisible} style={modalTheme.modalContainer} onSwipeComplete={onClose} onBackdropPress={onClose}>
        <View style={modalTheme.container}>
            {loading  ? <ActivityIndicator size={40} color='#5BA7FB'></ActivityIndicator>
            : null}
            {userLocationData!=null ? 
            <View style={modalTheme.container}> 
                    <View style={modalTheme.locationInfoContainer}>
                        <Icon name='map-marker' size={50} color='#5BA7FB'></Icon>
                        <Text style={modalTheme.cityNameText}>{userLocationData.cityName} <Text style={modalTheme.degreeText}>{userLocationData.temp_c}°C</Text></Text>
                        <CityWeatherDetail darkMode={darkModeEnabled} city={userLocationData}></CityWeatherDetail>
                    </View>
                    <Button buttonTitle='This is my current location' onPress={handleSaveUserCurrentLocation}></Button>
                </View> 
            :null}
            
        </View>
        </Modal>
    )
}
export default VerifyLocationModal;