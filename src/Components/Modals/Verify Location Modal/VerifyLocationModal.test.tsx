import React from 'react';
import {render} from '@testing-library/react-native';
import VerifyLocationModal from './VerifyLocationModal';
import { NavigationContainer } from '@react-navigation/native';
let visible=true;
function setVisible(){
    visible=!visible;
}
test('should be render if visible true', () => { 
    const comp=render(
        <NavigationContainer>
            <VerifyLocationModal isVisible={visible} onClose={setVisible}/>
        </NavigationContainer>
    )
    expect(comp).toMatchSnapshot();
})

