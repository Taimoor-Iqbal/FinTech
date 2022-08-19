import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ScreensName } from '../core/String';
import AuthStack from '../navigation/authNavigation/AuthNavigation'
import SplashScreen from '../screens/splashScreen/SplashScreen';


const RootStack = createNativeStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
})


const RootStackNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name={ScreensName.SplashScreen} component={SplashScreen} options={navOptionHandler} />
                <RootStack.Screen name={ScreensName.AuthScreen} component={AuthStack} options={navOptionHandler} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigator

