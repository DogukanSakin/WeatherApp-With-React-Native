import React from 'react';
import { render,fireEvent} from '@testing-library/react-native';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { initialState } from '../../Redux/ThemeStore';
import { reducers } from '../../Redux/ThemeReducer';
import { NavigationContainer } from '@react-navigation/native';
import { lightTheme } from '../../Styles/Theme';
import { act } from 'react-test-renderer';
test('should be render page', () => { 
    render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <HomePage/>
            </Provider>
        </NavigationContainer>)
    }
)
test('should be render background color with default light theme background', () => { 
    const page = render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <HomePage/>
            </Provider>
    </NavigationContainer>)
    const pageContainerBackgroundColor=page.getByTestId('home-page-container').props.style['backgroundColor'];
    expect(pageContainerBackgroundColor).toBe(lightTheme.defaultColor)
})

test('should be trigger back icon', () => { 
    const page = render(
        <NavigationContainer>
            <Provider store={legacy_createStore(reducers,initialState)}>
                <HomePage/>
            </Provider>
        </NavigationContainer>)
      
        const backButton=page.getByTestId('home-page-goback-icon');
        fireEvent(backButton,'press');      
    }
)