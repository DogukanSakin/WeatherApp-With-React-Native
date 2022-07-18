import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WeatherCard from './WeatherCard';
import { darkTheme,lightTheme } from '../../Styles/Theme';
const testCity={
    cityName:'TestCity',
    temp_c:20,
    conditionText:'Sunny'
}
test('should match with snapshot', () => { 
    const comp=render(<WeatherCard city={testCity} onTap={()=>{}}/>);
    expect(comp).toMatchSnapshot();
})
test('should be write all infos correctly', () => { 
    const comp=render(<WeatherCard city={testCity} onTap={()=>{}}/>);
    const cityText=comp.getByTestId('weather-card-cityText').children[0];
    expect(cityText).toBe(testCity.cityName);
    const degreeText=comp.getByTestId('weather-card-degreeText').children.join('');
    expect(degreeText).toContain(testCity.temp_c);
    const icon=comp.getByTestId('weather-card-icon');
    expect(icon.props.source['testUri']).toContain(testCity.conditionText); 
 })
 test('should be render default theme ', () => { 
    const comp=render(<WeatherCard city={testCity} onTap={()=>{}}/>);
    const card=comp.getByTestId('weather-card-container').props.style;
    expect(card['backgroundColor']).toBe(lightTheme.greyColor);
    
})
test('should be render dark theme if enable', () => { 
    const comp=render(<WeatherCard city={testCity} onTap={()=>{}} darkMode={true}/>);
    const card=comp.getByTestId('weather-card-container').props.style;
    expect(card['backgroundColor']).toBe(darkTheme.greyColor);
    
})

 test('should trigger onPress', () => { 
    const mockFunction=jest.fn();
    const comp=render(<WeatherCard city={testCity} onTap={mockFunction}/>);
    const buttonTocuhable=comp.getByTestId('weather-card-touchable');
    fireEvent(buttonTocuhable,'press');
    expect(mockFunction).toBeCalledTimes(1);
})