# WeatherApp with React Native

This app is a simple weather app that I developed using Typescript during my learning React Native process. 

## Features

- Upon arrival, you will be greeted by a welcome screen. Here you can add your location to the app if you want. If you add your location to the app, you can see the weather for your city on the homepage. If you wish, you can pass this screen without adding a location and proceed to the home page. 
- On the Welcome screen, you can activate the dark theme of the application if you wish. 
- The app stores both your theme preference and, if you add it, your location in your device's memory. 
- You can use the location search to find out the weather forecast for a city. Tap on the result found and you can view the detailed weather forecast of the city. 

## Tools & Resources

- [API](https://www.weatherapi.com/)
- [React Navigation](https://reactnavigation.org/) for page hierarchy
- [React Native Config](https://github.com/luggit/react-native-config) for `.env` files
- [Axios](https://github.com/axios/axios) for data fetching
- [Redux](https://redux.js.org/introduction/getting-started) for theme changes
- [Vector Icons](https://github.com/oblador/react-native-vector-icons) for icons
- [React Native Async Store](https://react-native-async-storage.github.io/async-storage/) for store location and store theme preference
- [React Native Get Location](https://www.npmjs.com/package/react-native-get-location) for get user location

## ScreenShoots from Real Android Device
<div align='center'>
   <img src="https://user-images.githubusercontent.com/86911611/179504352-0eb16cc4-65a2-4a51-adf1-dc82f76e796d.jpg" width="400" height="900" /><img/>
   <img src="https://user-images.githubusercontent.com/86911611/179504362-59a7fc6b-f13d-4d33-ae8a-27d039d842c9.jpg" width="400" height="900" /><img/>
   <img src="https://user-images.githubusercontent.com/86911611/179504371-c13ea053-434d-4721-8e74-3c7c53c362bb.jpg" width="400" height="900" /><img/>
   <img src="https://user-images.githubusercontent.com/86911611/179504908-6f57d448-ea0e-472f-b1ff-f3061b7e6f94.jpg" width="400" height="900" /><img/>
   <img src="https://user-images.githubusercontent.com/86911611/179504406-301108d7-9ee7-4494-8c75-1fd9381886c0.jpg" width="400" height="900" /><img/>
   <img src="https://user-images.githubusercontent.com/86911611/179505300-1d136a7f-2d89-4fe7-90f4-e4fd2fd36d2c.jpg" width="400" height="900" /><img/>
  <img src="https://user-images.githubusercontent.com/86911611/179505306-7a3bfe08-a3e8-44f4-98f3-ac4f8299d5b0.jpg" width="400" height="900" /><img/>
  <img src="https://user-images.githubusercontent.com/86911611/179505319-681025b3-c580-43cf-bd6d-5b2c7b5dea8a.jpg" width="400" height="900" /><img/>
  <img src="https://user-images.githubusercontent.com/86911611/179505336-11133e83-e696-4cb5-8102-9a5cc9ee1e8b.jpg" width="400" height="900" /><img/>
  <img src="https://user-images.githubusercontent.com/86911611/179505343-e1b7a682-ad45-425e-ab42-9ac8f05ba410.jpg" width="400" height="900" /><img/>
 </div>

## Installation

Clone this repository on your local machine.

```
git clone https://github.com/DogukanSakin/WeatherApp.git
```

## Usage

Run the following commands in the project folder to install the project dependencies.

```
npm init
npm install
npx react-native start
```
These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

## To Run the Application
In the project directory you can run:

```
For Android Emulator: npx react-native run-android
```

```
For iOS Emulator: npx react-native run-ios
```
