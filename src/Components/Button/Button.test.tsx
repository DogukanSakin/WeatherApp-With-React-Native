import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from './Button';
import styles from './Button.style';
test('should match with snapshot', () => { 
    const comp=render(<Button buttonTitle='Test'/>);
    expect(comp).toMatchSnapshot();
})
test('should  render title correctly', () => { 
    const testTitle='This is test title!';
    const comp=render(<Button buttonTitle={testTitle}/>);
    const buttonText= comp.getByTestId('button-title').children[0];
    expect(buttonText).toBe(testTitle);
})
test('should trigger onPress', () => { 
    const mockFunction=jest.fn();
    const comp=render(<Button buttonTitle='Test' onPress={mockFunction}/>);
    const buttonTocuhable=comp.getByTestId('touchable-button');
    fireEvent(buttonTocuhable,'press');
    expect(mockFunction).toBeCalledTimes(1);
})
test('should render given default theme if theme property is exist', () => { 
    const comp=render(<Button buttonTitle='Test'/>);
    const button=comp.getByTestId('touchable-button').props.style;
    expect(button).toMatchObject(styles.primary.buttonContainer);
})
test('should render given secondary theme', () => { 
    const style="secondary";
    const comp=render(<Button buttonTitle='Test' theme={style}/>);
    const button=comp.getByTestId('touchable-button').props.style;
    expect(button).toMatchObject(styles[style].buttonContainer);
})
