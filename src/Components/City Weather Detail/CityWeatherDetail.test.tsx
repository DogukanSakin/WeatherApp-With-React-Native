import React from 'react';
import {render} from '@testing-library/react-native';
import CityWeatherDetail from './CityWeatherDetail';
import { darkTheme,lightTheme } from '../../Styles/Theme';
const testCity={
    country:'TestCountry',
    visibility:10,
    feelsLike_c:15.5,
    humidity:5,
    wind:20
}
test('should match with snapshot with testCity', () => { 
    const comp=render(<CityWeatherDetail darkMode={false} city={testCity}/>);
    expect(comp).toMatchSnapshot();
})
test('should  render cityInfo correctly', () => { 
    const comp=render(<CityWeatherDetail darkMode={false} city={testCity}/>);
    //Country Text:
    const countryText= comp.getByTestId('weather-detail-card-country-text').children[0];
    expect(countryText).toBe(testCity.country);
    //Visibility:
    const visibilityText= comp.getByTestId('weather-detail-card-visibility-text').children.join('');
    expect(visibilityText).toContain(testCity.visibility);
    //Feels:
    const feelsText= comp.getByTestId('weather-detail-card-feels-text').children.join('');
    expect(feelsText).toContain(testCity.feelsLike_c);
    //Wind
    const windText= comp.getByTestId('weather-detail-card-wind-text').children.join('');
    expect(windText).toContain(testCity.wind);
    //Humidity
    const humidityText= comp.getByTestId('weather-detail-card-humidity-text').children.join('');
    expect(humidityText).toContain(testCity.humidity);
})
test('should text color be white if theme is light ', () => { 
    const comp=render(<CityWeatherDetail darkMode={false} city={testCity}/>);
    //Country
    const countryText= comp.getByTestId('weather-detail-card-country-text').props;
    expect(countryText.style['color']).toBe(lightTheme.componentColor);
    //Visibility:
    const visibilityText= comp.getByTestId('weather-detail-card-visibility-text').props;
    expect(visibilityText.style['color']).toBe(lightTheme.componentColor);
    //Feels:
    const feelsText= comp.getByTestId('weather-detail-card-feels-text').props;
    expect(feelsText.style['color']).toBe(lightTheme.componentColor);
    //Wind
    const windText= comp.getByTestId('weather-detail-card-wind-text').props;
    expect(windText.style['color']).toBe(lightTheme.componentColor);
    //Humidity
    const humidityText= comp.getByTestId('weather-detail-card-humidity-text').props;
    expect(humidityText.style['color']).toBe(lightTheme.componentColor);
    
})
test('should text color be white if theme is dark ', () => { 
    const comp=render(<CityWeatherDetail darkMode={true} city={testCity}/>);
    //Country
    const countryText= comp.getByTestId('weather-detail-card-country-text').props;
    expect(countryText.style['color']).toBe(darkTheme.componentColor);
    //Visibility:
    const visibilityText= comp.getByTestId('weather-detail-card-visibility-text').props;
    expect(visibilityText.style['color']).toBe(darkTheme.componentColor);
    //Feels:
    const feelsText= comp.getByTestId('weather-detail-card-feels-text').props;
    expect(feelsText.style['color']).toBe(darkTheme.componentColor);
    //Wind
    const windText= comp.getByTestId('weather-detail-card-wind-text').props;
    expect(windText.style['color']).toBe(darkTheme.componentColor);
    //Humidity
    const humidityText= comp.getByTestId('weather-detail-card-humidity-text').props;
    expect(humidityText.style['color']).toBe(darkTheme.componentColor);
    
})
