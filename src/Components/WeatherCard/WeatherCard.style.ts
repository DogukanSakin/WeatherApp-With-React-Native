import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
import { darkTheme,lightTheme } from '../../Styles/Theme';

export const styles = (darkMode:boolean) =>StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:7,
        marginBottom:7,
        margin:15,
        backgroundColor:darkMode ? darkTheme.greyColor : lightTheme.greyColor,
        borderRadius:50,
        paddingRight:10,
        paddingLeft:10,
        padding:10,  
    },
    cardIcon:{
        height:50,
        width:50
    },
    cityText:{
        textAlign:'center',
        flex:1,
        fontFamily:Fonts.lightFont,
        fontSize:25,
        color:darkMode?darkTheme.componentColor:lightTheme.componentColor
    },
    degreeText:{
        fontSize:25,
        fontFamily:Fonts.lightFont,
        color:darkMode?darkTheme.componentColor:lightTheme.componentColor
        
    },
})