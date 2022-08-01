import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './SplashScreenStyle'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from "react-native-animatable"


import LogoMid from '../../assets/svg/LogoMid.svg'
import { theme } from '../../core/theme'
import { ScreensName } from '../../core/String'

const SplashScreen = () => {
    const [animating, setAnimating] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(ScreensName.AuthScreen)
        }, 3000);
    }, [])
    return (
        <View style={[styles.background]}>
            {/* <StatusBar
                animated
                backgroundColor={theme.colors.white}
                barStyle='dark-content'
            /> */}
            <View style={styles.logo}>
                <LogoMid />
                <ActivityIndicator
                    // animating={animating}
                    color={theme.colors.secondary}
                    size="large"
                    style={styles.activityIndicator}
                />
            </View>
        </View>
    )
}

export default SplashScreen

