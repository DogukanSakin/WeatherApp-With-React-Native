import React,{FC} from 'react';
import { Text,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './Button.style';
interface IProps extends TouchableOpacityProps{
    buttonTitle:string;
    theme?:'primary' | 'secondary';
    onTap(): any;
}
const Button:FC<IProps>=({buttonTitle,theme='primary',onTap})=>{
    return(
        <TouchableOpacity style={styles[theme].buttonContainer} onPress={onTap}>
            <Text style={styles[theme].buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default Button;