import React,{useState,useEffect} from 'react';
import { Text,View,Image,Switch,PermissionsAndroid} from 'react-native';
import {styles} from './WelcomePage.style';
import Button from '../../Components/Button';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch, Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location'
import VerifyLocationModal from '../../Components/Modals/Verify Location Modal';
;
const WelcomePage =()=>{
    const darkMode=useSelector((selector:any)=>selector.isDarkModeEnabled);
    const [verifyLocationModalVisible,setVerifyLocationModalVisible]=useState<boolean>(false);
    const [userLocationData,setUserLocationData]=useState<any>(null);
    const dispatch=useDispatch();
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
    const [darkModeEnabled,setDarkModeEnabled]=useState<boolean>(false);
    const themeColors=styles(darkModeEnabled);
    const navigation = useNavigation<homeScreenProp>();
    function handleVerifyModalVisible() {
        setVerifyLocationModalVisible(!verifyLocationModalVisible);
    }
    async function enabledDarkMode(){
        dispatch({type:'SWITCH_THEME'});
        setDarkModeEnabled(!darkMode);
        await AsyncStorage.setItem('@themeLocalData', JSON.stringify(!darkMode))
    }
    async function getThemeData(){
        let jsonValue:any = await AsyncStorage.getItem('@themeLocalData')
        jsonValue=jsonValue != null ? JSON.parse(jsonValue) : false;
        setDarkModeEnabled(jsonValue);
    }
    useEffect(()=>{
        getThemeData();
    },[]);
    function handleGetUserLocation(){
        setUserLocationData(null);
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            handleVerifyModalVisible();
            setUserLocationData(location);
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
    
    return(
        
        <View style={themeColors.container}>
            <VerifyLocationModal isVisible={verifyLocationModalVisible} onClose={handleVerifyModalVisible} location={userLocationData}></VerifyLocationModal>
            <View style={themeColors.imageContainer} testID='welcome-page-images'>
            <Image style={themeColors.leftIcon} source={require('../../../assets/images/WelcomeIcon1.png')}></Image>
                <Image style={themeColors.rightIcon} source={require('../../../assets/images/WelcomeIcon2.png')}></Image>
                <Image style={themeColors.leftIcon} source={require('../../../assets/images/WelcomeIcon3.png')}></Image>
            </View>
            <Text style={themeColors.welcomeText}>Welcome to WeatherApp.</Text>
            <Text style={themeColors.welcomeText}>So let’s started!</Text>
            <Button buttonTitle='Get my location' theme='primary' onPress={requestLocationPermission}></Button>
            <Button buttonTitle='Skip for now' theme='secondary'onPress={() => navigation.navigate('Home')}></Button>
            <View style={themeColors.isDarkModeEnabledSwitchContainer}>
                <Switch testID='welcome-page-switch' onValueChange={enabledDarkMode} value={darkModeEnabled}
                thumbColor={darkModeEnabled ? "#5BA7FB" : "white"}
                trackColor={{ false: "#F5F4F4", true: "#313030" }}
                ></Switch>
                <Text style={themeColors.darkModeText}>Enable dark mode</Text>
            </View> 
        </View>
        
    )
}

export default WelcomePage;