import { StyleSheet } from 'react-native';
import Fonts from '../../../Styles/Fonts';
import { darkTheme,lightTheme } from '../../../Styles/Theme';

export const styles =(darkMode:boolean)=>StyleSheet.create({
    modalContainer:{
        justifyContent:'flex-end',
        margin:0
    },
    container:{
        backgroundColor: darkMode ? darkTheme.greyColor:lightTheme.greyColor,
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:50,
        width:50,
        marginTop:10
    },
    cityText:{
        fontFamily:Fonts.lightFont,
        color:'#5BA7FB',
        fontSize:25,
    },
    degreeText:{
        color:darkMode?darkTheme.componentColor:lightTheme.componentColor,
        fontFamily:Fonts.lightFont,
        marginTop:10,
        fontSize:20,
    }


})