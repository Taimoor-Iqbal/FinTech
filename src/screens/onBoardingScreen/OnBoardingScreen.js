import { KeyboardAvoidingView, Text, View, Platform, ScrollView } from 'react-native'
import React from 'react'
import styles from './OnBoardingScreenStyle'
import Button from '../../components/Button'
import { ScreensName, Strings } from '../../core/String'
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable';
import LogoMid from '../../assets/svg/LogoMid.svg'

const OnBoardingScreen = () => {
    const navigation = useNavigation()

    const goToNextPage = (page) => {
        navigation.navigate(page)
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            behavior={Platform.OS === 'ios' && 'padding'}
        >
            <ScrollView style={styles.mainContainer}>
                <View style={styles.mainContainer}>
                    <Animatable.View animation="slideInUp">
                        <LogoMid
                            width='100%'
                            style={{
                                position: 'absolute',
                                top: 50,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        />
                    </Animatable.View>
                    <Animatable.View animation="fadeInRight" style={styles.btnContainer}>
                        <Button
                            onPress={() => goToNextPage(ScreensName.LoginScreen)}
                            labelStyle={styles.buttonText}
                            mode='contained'
                        >{Strings.Login}</Button>
                        <View style={styles.subBtnContainer}>
                            <Button
                                style={styles.btn}
                                labelStyle={styles.subButtonText}
                                mode='contained'
                            >{Strings.Tour}</Button>
                            <Button
                                style={styles.btn}
                                labelStyle={styles.subButtonText}
                                mode='contained'
                            >{Strings.ApplyMemberShip}</Button>
                        </View>
                    </Animatable.View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default OnBoardingScreen

