import React,{FC,useEffect,useState} from 'react';
import { Text,View,Image } from 'react-native';
import Modal from "react-native-modal";
import {styles} from './CityWeatherCardDetailModal.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CityWeatherDetail from '../../City Weather Detail';
import iconParser from '../../../Utils/iconParser';

interface IModalProps{
    isVisible:boolean;
    onClose:()=>void;
    city:any;
}

const CityWeatherDetailCardModal:FC<IModalProps>=({isVisible,onClose,city})=>{
    let icon=iconParser(city.conditionText);
    const [darkModeEnabled,setDarkModeEnabled]=useState<boolean>(false);
    const modalTheme=styles(darkModeEnabled);
    useEffect(()=>{getThemeData();},[]);
    async function getThemeData(){
        let jsonValue:any = await AsyncStorage.getItem('@themeLocalData')
        jsonValue=jsonValue != null ? JSON.parse(jsonValue) : false;
        setDarkModeEnabled(jsonValue);
    }

    return(
        <Modal isVisible={isVisible} onSwipeComplete={onClose} onBackdropPress={onClose} style={modalTheme.modalContainer}>
            <View style={modalTheme.container}>
                <Image source={icon} style={modalTheme.image}></Image>
                <Text style={modalTheme.cityText}>{city.cityName} <Text style={modalTheme.degreeText}>{city.temp_c}°C</Text></Text>
                <CityWeatherDetail darkMode={darkModeEnabled} city={city}></CityWeatherDetail>
            </View>
        </Modal>
    )
}
export default CityWeatherDetailCardModal;