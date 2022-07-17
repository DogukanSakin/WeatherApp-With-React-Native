import { StyleSheet,Dimensions } from 'react-native';
import Fonts from '../../../Styles/Fonts';
import { darkTheme,lightTheme } from '../../../Styles/Theme';
const deviceSize=Dimensions.get('window');
export const styles=(darkMode:boolean)=>StyleSheet.create({
    modalContainer:{
        justifyContent:'flex-end',
        margin:0,
      
        
    },
    container:{
        backgroundColor: darkMode ? darkTheme.greyColor:lightTheme.greyColor,
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        alignItems:'center',
        justifyContent:'center',
        height:deviceSize.height/2
    },
    locationInfoContainer:{
        marginTop:25,
        alignItems:'center',
        justifyContent:'center'
    },
    cityNameText:{
        fontFamily:Fonts.lightFont,
        color:darkMode? darkTheme.componentColor:lightTheme.componentColor,
        fontSize:30,
        marginTop:10
    },
    degreeText:{
        color:'#5BA7FB',
        fontFamily:Fonts.lightFont,
        fontSize:30,
    }
})