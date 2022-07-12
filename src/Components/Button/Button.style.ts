import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
const baseButtonStyle=StyleSheet.create({
    buttonText:{
        fontFamily:Fonts.semiBoldFont,
        fontSize:20
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginTop:15,
        borderRadius:50
    }
})
export default {
    primary:StyleSheet.create({

        buttonText:{
            ...baseButtonStyle.buttonText,
            color:'white'
        },
        buttonContainer:{
            ...baseButtonStyle.buttonContainer,
            backgroundColor:'#5BA7FB'
        }
    }),
    secondary:StyleSheet.create({
        buttonText:{
            ...baseButtonStyle.buttonText,
            color:'#5BA7FB'
        },
        buttonContainer:{
            ...baseButtonStyle.buttonContainer,
            borderWidth:1,
            borderColor:'#5BA7FB'
        }

    })

}