import React from 'react';
import {render} from '@testing-library/react-native';
import CityWeatherDetailCardModal from './CityWeatherCardDetailModal';
const testCity={
    conditionText:'Sunny',
    temp_c:25,
    cityName:'TestCity'
}
let visible=true;
function setVisible(){
    visible=!visible;
}
test('should be render if visible true', () => { 
    const comp=render(<CityWeatherDetailCardModal isVisible={visible} onClose={setVisible} city={testCity}></CityWeatherDetailCardModal>)
    expect(comp).toMatchSnapshot();
})
test('should be write all infos correctly', () => { 
    const comp=render(<CityWeatherDetailCardModal isVisible={visible} onClose={setVisible} city={testCity}></CityWeatherDetailCardModal>)
    const cityText=comp.getByTestId('city-weather-card-detail-modal-cityText').children[0];
    expect(cityText).toBe(testCity.cityName);
    const degreeText=comp.getByTestId('city-weather-card-detail-modal-degreeText').children.join('');
    expect(degreeText).toContain(testCity.temp_c);
    const image=comp.getByTestId('city-weather-card-detail-modal-image');
    expect(image.props.source['testUri']).toContain(testCity.conditionText);
 })
