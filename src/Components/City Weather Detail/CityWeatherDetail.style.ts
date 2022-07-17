import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
import { darkTheme,lightTheme } from '../../Styles/Theme';

export const styles=(darkMode:boolean)=>StyleSheet.create({
    weatherDetailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        flexDirection:'row',
    },
    weatherDetailText:{
        paddingLeft:5,
        fontSize:15,
        fontFamily:Fonts.regularFont,
        marginRight:15,
        color:darkMode?darkTheme.componentColor:lightTheme.componentColor
        
    },
    weatherDetailCardContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginBottom:10
    }
})