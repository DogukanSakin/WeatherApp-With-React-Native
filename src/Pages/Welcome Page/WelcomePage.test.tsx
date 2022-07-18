import React from 'react';
import { fireEvent, render} from '@testing-library/react-native';
import WelcomePage from './WelcomePage';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { initialState } from '../../Redux/ThemeStore';
import { reducers } from '../../Redux/ThemeReducer';
import { NavigationContainer } from '@react-navigation/native';
import { lightTheme } from '../../Styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { act } from 'react-test-renderer';
test('should be render page', () => { 
    render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <WelcomePage/>
            </Provider>
        </NavigationContainer>)
    }
)
test('should be render background color with default light theme background', () => { 
    const page = render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <WelcomePage/>
            </Provider>
    </NavigationContainer>)
    const pageContainerBackgroundColor=page.getByTestId('welcome-page-container').props.style['backgroundColor'];
    expect(pageContainerBackgroundColor).toBe(lightTheme.defaultColor)
})
test('should be render images in welcome page', () => { 
    const page = render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <WelcomePage/>
            </Provider>
    </NavigationContainer>)
    const image1=page.getByTestId('welcome-page-images-icon1');
    expect(image1.props.source['testUri']).toBe('../../../assets/images/WelcomeIcon1.png');
    const image2=page.getByTestId('welcome-page-images-icon2');
    expect(image2.props.source['testUri']).toBe('../../../assets/images/WelcomeIcon2.png');
    const image3=page.getByTestId('welcome-page-images-icon3');
    expect(image3.props.source['testUri']).toBe('../../../assets/images/WelcomeIcon3.png');
  
 })
test('should be trigger theme switch', () => { 
    const page = render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <WelcomePage/>
            </Provider>
        </NavigationContainer>)
      
        const welcomePageSwitch=page.getByTestId('welcome-page-switch');
        fireEvent(welcomePageSwitch,'press');      
    }
)

test('should be theme data readable', async () => {
    await AsyncStorage.setItem('@themeLocalData', 'true')
    let darkThemeValue = await AsyncStorage.getItem('@themeLocalData');
    darkThemeValue =darkThemeValue  != null ? JSON.parse(darkThemeValue ) : false;
    expect(darkThemeValue).toBe(true); 
})
test('should be switch value true if dark mode enable', async () => { 
    const page = render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <WelcomePage/>
            </Provider>
        </NavigationContainer>)
            await act(async()=>{
                await AsyncStorage.setItem('@themeLocalData', 'true')
                const welcomePageSwitch=page.getByTestId('welcome-page-switch'); 
                let darkThemeValue:any = await AsyncStorage.getItem('@themeLocalData');
                darkThemeValue=darkThemeValue != null ? JSON.parse(darkThemeValue) : false;
                welcomePageSwitch.props.value=darkThemeValue;
                expect(welcomePageSwitch.props.value).toBe(true);
            });              
 })