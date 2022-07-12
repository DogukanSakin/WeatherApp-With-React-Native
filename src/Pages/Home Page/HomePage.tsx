import React from 'react';
import { Text,View,Image } from 'react-native';
import Button from '../../Components/Button';
import styles from './HomePage.style';
const HomePage=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.leftIcon} source={require('../../../assets/images/WelcomeIcon1.png')}></Image>
                <Image style={styles.rightIcon} source={require('../../../assets/images/WelcomeIcon2.png')}></Image>
                <Image style={styles.leftIcon} source={require('../../../assets/images/WelcomeIcon3.png')}></Image>
            </View>
            <Text style={styles.welcomeText}>Welcome to WeatherApp.</Text>
            <Text style={styles.welcomeText}>So let’s started!</Text>
            <Button buttonTitle='Get my location' theme='primary' onTap={()=>console.log("hello")}></Button>
            <Button buttonTitle='Skip for now' theme='secondary' onTap={()=>console.log("hello")}></Button>
        </View>
    )
}
export default HomePage;