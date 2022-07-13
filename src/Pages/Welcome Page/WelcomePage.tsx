import React,{useState,FC} from 'react';
import { Text,View,Image,Switch} from 'react-native';
import {styles} from './WelcomePage.style';
import Button from '../../Components/Button';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
const WelcomePage: FC =()=>{
    const darkMode=useSelector((selector:any)=>selector.isDarkModeEnabled);
    const themeColors=styles(darkMode);
    const dispatch=useDispatch();
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
    const [darkModeEnabled,setDarkModeEnabled]=useState(darkMode);
    const navigation = useNavigation<homeScreenProp>();
    async function enabledDarkMode(){
        dispatch({type:'SWITCH_THEME'});
        setDarkModeEnabled(!darkMode);
    }
    return(
        <View style={themeColors.container}>
            <View style={themeColors.imageContainer}>
                <Image style={themeColors.leftIcon} source={require('../../../assets/images/WelcomeIcon1.png')}></Image>
                <Image style={themeColors.rightIcon} source={require('../../../assets/images/WelcomeIcon2.png')}></Image>
                <Image style={themeColors.leftIcon} source={require('../../../assets/images/WelcomeIcon3.png')}></Image>
            </View>
            <Text style={themeColors.welcomeText}>Welcome to WeatherApp.</Text>
            <Text style={themeColors.welcomeText}>So let’s started!</Text>
            <Button buttonTitle='Get my location' theme='primary' ></Button>
            <Button buttonTitle='Skip for now' theme='secondary'onPress={() => navigation.navigate('Home')}></Button>
            <View style={themeColors.isDarkModeEnabledSwitchContainer}>
                <Switch onValueChange={enabledDarkMode} value={darkModeEnabled}
                thumbColor={darkModeEnabled ? "#5BA7FB" : "white"}
                trackColor={{ false: "#F5F4F4", true: "#313030" }}
                ></Switch>
                <Text style={themeColors.darkModeText}>Enable dark mode</Text>
            </View> 
        </View>
    )
}

export default WelcomePage;