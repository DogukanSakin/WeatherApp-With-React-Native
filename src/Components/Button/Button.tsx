import React,{FC} from 'react';
import { Text,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './Button.style';
interface IProps extends TouchableOpacityProps{
    buttonTitle:string;
    theme?:'primary' | 'secondary';
}
const Button:FC<IProps>=({buttonTitle,theme='primary',...rest})=>{
    return(
        <TouchableOpacity style={styles[theme].buttonContainer} {...rest}>
            <Text style={styles[theme].buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default Button;