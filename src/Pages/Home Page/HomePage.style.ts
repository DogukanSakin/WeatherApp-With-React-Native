import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
const baseImageStyle=StyleSheet.create({
    container:{
        width:130,
        height:130,
        resizeMode:'contain',
    }
})
export default StyleSheet.create({
    container:{
        backgroundColor:'white',
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
    
    },
 

});