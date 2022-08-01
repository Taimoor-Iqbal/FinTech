import { Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './LoginScreenStyle'
import Input from '../../components/TextInput'
import Button from '../../components/Button'
import { ScreensName, Strings } from '../../core/String'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

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
            <View style={styles.mainContainer}>
                <Header />
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Login to Your Account</Text>
                    </View>
                    <Text style={styles.text}>Please check your email, we have sent an email with your login credentials</Text>

                    <View style={styles.inputContainer}>
                        <Input
                            label='Username'
                            autoCapitalize="none"
                        />
                        <Input
                            label='Password'
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity style={styles.forgetPassword}>
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.footer}>
                    <Button
                        onPress={() => goToNextPage(ScreensName.NewPassword)}
                        labelStyle={styles.buttonText}
                        mode='contained'
                    >{Strings.Login}</Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

