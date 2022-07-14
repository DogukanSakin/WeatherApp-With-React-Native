
import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
import { darkTheme,lightTheme } from '../../Styles/Theme';
const baseImageStyle=StyleSheet.create({
    container:{
        width:130,
        height:130,
        resizeMode:'contain',
    }
})
export const styles = (darkMode:boolean)=>StyleSheet.create({
    container:{
        backgroundColor:darkMode? darkTheme.defaultColor : lightTheme.defaultColor,
        flex:1,
        padding:15
    },
    rightIcon:{
        ...baseImageStyle.container,
        right:75
     },
     leftIcon:{
         ...baseImageStyle.container,
         left:75
     },
     imageContainer:{
         alignItems:'center',
         marginTop:20
     },
     welcomeText:{
         fontFamily:Fonts.lightFont,
         fontSize:30,
         color:darkMode? darkTheme.componentColor : lightTheme.componentColor,
     
     },
     isDarkModeEnabledSwitchContainer:{
         justifyContent:'center',
         alignItems:'center',
         flexDirection:'row',
         marginTop:15,
     },
     darkModeText:{
         fontFamily:Fonts.lightFont,
         color:darkMode? darkTheme.componentColor : lightTheme.componentColor,
         fontSize:15,
         marginLeft:5
     }
})
