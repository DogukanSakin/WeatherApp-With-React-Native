import { StyleSheet } from 'react-native';
import { darkTheme,lightTheme } from '../../Styles/Theme';
import Fonts from '../../Styles/Fonts';
export const styles = (darkMode:boolean)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:darkMode? darkTheme.defaultColor:lightTheme.defaultColor,
    },
    topBarInnerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10
    },
    searchLocationInput:{
        flex:1,  
        fontFamily:Fonts.regularFont,
        color:darkMode? darkTheme.componentColor:lightTheme.componentColor,
        
    },
    inputBoxInnerContainer:{
        borderWidth:darkMode ? 1 : 0 ,
        marginRight:15,
        marginLeft:15,
        borderRadius:50,
        paddingLeft:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:!darkMode ? lightTheme.greyColor: undefined, 
        borderColor:darkMode ? darkTheme.componentColor : undefined,
        flex:1,
    },
    iconStyle:{
        marginLeft:10,
    },
    userLocationContainer:{
        backgroundColor:darkMode? darkTheme.greyColor : lightTheme.greyColor,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        padding:10
    },
    cityInfoContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    cityWeatherIcon:{
        height:35,
        width:35,
        marginLeft:15,
    },
    cityNameText:{
        fontFamily:Fonts.lightFont,
        fontSize:30,
        flex:1,
        textAlign:'center',
        color:'#5BA7FB'

    },
    cityDegreeText:{
        fontFamily:Fonts.lightFont,
        fontSize:30,
        marginRight:15,
        color:darkMode?darkTheme.componentColor:lightTheme.componentColor
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    addLocationInnerContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    plusIconStyle:{
        backgroundColor:darkMode?darkTheme.darkerGreyColor:lightTheme.darkerGreyColor,
        borderRadius:50,
        padding:10,
        marginTop:15
    },
    addLocationText:{
        fontFamily:Fonts.lightFont,
        color:darkMode?darkTheme.componentColor:lightTheme.componentColor,
        fontSize:30,
        marginTop:15
    }
    


    
})