import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreensName } from '../../core/String';

import OnBoardingScreen from '../../screens/onBoardingScreen/OnBoardingScreen';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import NewPasswordScreen from '../../screens/newPassword/NewPasswordScreen';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import MeetingRoomScreen from '../../screens/meetingRoom/MeetingRoomScreen';
import MeetingRoomSelectedScreen from '../../screens/meetingRoomSelected/MeetingRoomSelectedScreen'
const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
})
const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name={ScreensName.OnBoardingScreen} component={OnBoardingScreen} options={navOptionHandler} />
            <Stack.Screen name={ScreensName.LoginScreen} component={LoginScreen} options={navOptionHandler} />
            <Stack.Screen name={ScreensName.NewPassword} component={NewPasswordScreen} options={navOptionHandler} />
            <Stack.Screen name={ScreensName.HomeScreen} component={HomeScreen} options={navOptionHandler} /> */}
            <Stack.Screen name={ScreensName.MeetingRoomScreen} component={MeetingRoomScreen} options={navOptionHandler} />
            <Stack.Screen name={ScreensName.MeetingRoomSelectedScreen} component={MeetingRoomSelectedScreen} options={navOptionHandler} />

        </Stack.Navigator>
    )
}

export default AuthNavigation

